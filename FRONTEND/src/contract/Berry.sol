// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "hardhat/console.sol";
import "@quant-finance/solidity-datetime/contracts/DateTime.sol";

contract Berry {
    struct SubscriptionPlan {
        // Provider this plan belongs to 
        uint providerID;
        string name;
        string description;
        uint recurrence; // in days
        uint price;
        bool active;
        uint8 maxMembers;
        uint256 pricePerMember;
    }

    struct User {
        address owner;
        string name;
        uint berries;
        // Groups user belongs to
        uint numGroups;
        string imageURL;
        string description;
    }

    struct ServiceProvider {
        uint providerID;
        string name;
        string imageURL;
        address serviceOwner;
        // Number of plans this provider has
        uint numPlans;
    }

    struct Group {
        // uint groupId;
        // SubscriptionPlan activePlan;
        string name;
        uint256 totalBalance;
        // Plan this group is associated to
        uint planID;
        // ID of the provider for this plan
        uint planProviderID;
        uint numMembers;
        bool initialized;
        uint creationTimestamp;
        uint lastPaymentTimestamp;
    }

    // The membership of a user to a given group
    // Indicates the user belongs to a group
    struct GroupMembership {
        // Group this member belongs to
        uint groupID;
        User member;
        // Money user has paid to this group
        uint256 balance;
    }

    // How many providers | providerId counter
    uint public numProviders;
    // How many groups | groupId counter
    uint public numGroups;
    // How many users | userId counter
    uint public numUsers;

    // Collection of providers by id
    mapping(uint => ServiceProvider) public providers;
    // Collection of groups by groupId
    mapping(uint => Group) public groups;
    // Collection of users
    mapping(address => User) public users;
    // Each membership user has
    mapping(uint => mapping(address => GroupMembership))
        public userGroupMembership;
    // Groups per user
    mapping(address => mapping(uint => Group)) public groupsPerUser;
    // Members per group
    mapping(uint => mapping(uint => GroupMembership)) public membersPerGroup;
    // Plans per provider
    mapping(uint => mapping(uint => SubscriptionPlan)) public plansPerProvider;

    // TODO: string optimizations

    // TODO: track contract owner/deployer for service provider creation
    modifier onlyContractOwner() {
        // Require the contract owner to make operations
        _;
    }

    function createProvider(
        string memory name,
        string memory imageURL,
        address payable owner
    ) external onlyContractOwner returns (uint providerID) {
        providerID = numProviders++;

        // Create new service provider
        ServiceProvider storage newProvider = providers[providerID];
        newProvider.providerID = providerID;
        newProvider.name = name;
        newProvider.imageURL = imageURL;
        newProvider.serviceOwner = owner;
    }

    function addPlan(
        uint providerID,
        string memory name,
        string memory description,
        uint recurrence,
        uint price,
        uint8 maxMembers
    ) external returns (uint planID) {
        // Get selected provider
        ServiceProvider storage provider = providers[providerID];
        console.log(
            "Plan %s has a member price of %s",
            name,
            price / maxMembers
        );

        require(
            address(msg.sender) == provider.serviceOwner,
            "You are not allowed to create a plan"
        );

        planID = provider.numPlans;

        // Save plan using provider id
        SubscriptionPlan storage newPlan = plansPerProvider[providerID][planID];
        newPlan.providerID = providerID;
        newPlan.name = name;
        newPlan.description = description;
        newPlan.recurrence = recurrence;
        newPlan.price = price;
        newPlan.active = true;
        newPlan.maxMembers = maxMembers;
        newPlan.pricePerMember = price / maxMembers;

        // Increase provider plan counter
        provider.numPlans++;
    }

    function register(string memory name, string memory imageURL, string memory description) external {
        User storage newUser = users[msg.sender];
        newUser.name = name;
        newUser.imageURL = imageURL;
        newUser.description = description;

        numUsers++;
    }

    function createGroup(
        uint providerID,
        uint planID,
        string memory groupName
    ) external payable returns (uint groupID) {
        // Get desired plan
        SubscriptionPlan storage desiredPlan = plansPerProvider[providerID][
            planID
        ];

        require(desiredPlan.maxMembers > 0, "Plan is empty");
        require(
            msg.value >= desiredPlan.pricePerMember,
            "You need more cash to pay for this plan"
        );

        groupID = numGroups++;

        // Create new group
        Group storage newGroup = groups[groupID];
        // Set the group subscription plan
        newGroup.planID = planID;
        newGroup.planProviderID = providerID;
        newGroup.name = groupName;

        // Timestamps
        newGroup.creationTimestamp = block.timestamp;
        newGroup.lastPaymentTimestamp = block.timestamp;

        // Create user membership for this group
        uint membershipID = newGroup.numMembers;
        // Add user to newly created group
        GroupMembership storage newMembership = membersPerGroup[groupID][
            membershipID
        ];
        // Set user
        newMembership.member = users[msg.sender];
        newMembership.groupID = groupID;

        // Update user grouCount
        User storage user = users[msg.sender];
        user.numGroups++;

        setUserBerries();

        // Check if user gave more than needed
        uint excess = msg.value - desiredPlan.pricePerMember;

        if (excess > 0) {
            newMembership.balance += desiredPlan.pricePerMember;

            // Refund excessing
            payable(msg.sender).transfer(excess);
        } else {
            newMembership.balance = msg.value;
        }

        // Save membership
        membersPerGroup[groupID][membershipID] = newMembership;
        userGroupMembership[groupID][msg.sender] = newMembership;

        // Update number of members in group
        newGroup.numMembers++;

        // Update group balance
        newGroup.totalBalance += newMembership.balance;
        newGroup.initialized = true;

        // Save group to collection of groupsPerUser
        groupsPerUser[msg.sender][groupID] = newGroup;
    }

    function joinGroup(uint groupID) external payable returns (bool) {
        // Get group
        Group storage group = groups[groupID];
        SubscriptionPlan storage plan = plansPerProvider[group.planProviderID][
            group.planID
        ];

        require(group.initialized, "Group does not exist");
        require(group.numMembers < plan.maxMembers, "Group is full already");
        require(
            msg.value >= plan.pricePerMember,
            "You need more cash to pay for this plan"
        );

        // Create user membership for this group
        uint membershipID = group.numMembers;
        // Add user to newly created group
        GroupMembership storage newMembership = membersPerGroup[groupID][
            membershipID
        ];
        // Set user
        newMembership.member = users[msg.sender];
        newMembership.groupID = groupID;

        setUserBerries();

        // Update user grouCount
        User storage user = users[msg.sender];
        user.numGroups++;

        // Check if user gave more than needed
        uint excess = msg.value - plan.pricePerMember;

        if (excess > 0) {
            newMembership.balance += plan.pricePerMember;

            // Refund excessing
            payable(msg.sender).transfer(excess);
        } else {
            newMembership.balance = msg.value;
        }

        // Update group balance
        group.totalBalance += newMembership.balance;

        // Save membership
        membersPerGroup[groupID][membershipID] = newMembership;
        userGroupMembership[groupID][msg.sender] = newMembership;

        // Update number of members in group
        group.numMembers++;

        if (group.numMembers == plan.maxMembers) {
            // Check if the subscription period has passed
            if (
                DateTime.addDays(group.lastPaymentTimestamp, plan.recurrence) <
                block.timestamp
            ) {
                // Pay the subscription
                ServiceProvider storage provider = providers[plan.providerID];
                payable(provider.serviceOwner).transfer(group.totalBalance);
                group.totalBalance = 0;

                group.lastPaymentTimestamp = block.timestamp;
            }
        }

        // Save group to collection of groupsPerUser
        groupsPerUser[msg.sender][groupID] = group;

        return true;
    }

    function payRecurrent(uint groupID) external payable {
        // Get group
        Group storage group = groups[groupID];
        SubscriptionPlan storage plan = plansPerProvider[group.planProviderID][
            group.planID
        ];

        require(group.initialized, "Group does not exist");
        require(
            msg.value >= plan.pricePerMember,
            "You need more cash to pay for this plan"
        );

        // Get membership
        GroupMembership storage membership = userGroupMembership[groupID][
            msg.sender
        ];

        // Check if user gave more than needed
        uint excess = msg.value - plan.pricePerMember;

        if (excess > 0) {
            // Update balance of user in this group
            membership.balance += plan.pricePerMember;

            // Refund excessing
            payable(msg.sender).transfer(excess);
        } else {
            membership.balance = msg.value;
        }

        // Update group balance
        group.totalBalance += plan.pricePerMember;

        if (group.numMembers == plan.maxMembers) {
            // Check if the subscription period has passed
            if (
                DateTime.addDays(group.lastPaymentTimestamp, plan.recurrence) <
                block.timestamp
            ) {
                // Pay the subscription
                ServiceProvider storage provider = providers[plan.providerID];
                payable(provider.serviceOwner).transfer(group.totalBalance);
                group.totalBalance = 0;

                group.lastPaymentTimestamp = block.timestamp;
            }
        }
    }
    function leaveGroup(uint groupID) external returns (bool) {
        // Get group
        Group storage group = groups[groupID];

        require(group.initialized, "Group does not exist");
        delete userGroupMembership[groupID][msg.sender];

        // Update member count
        group.numMembers--;

        // Update groupBalance

        return true;
    }

    function setUserBerries() private {
        User storage userBerry = users[msg.sender];
        userBerry.berries += 5;
    }

    function setName(string memory name) public {
        User storage user = users[msg.sender];
        user.name = name;
    }

    function setBio(string memory bio) public {
        User storage user = users[msg.sender];
        user.description = bio;
    }

    function getUserBerries() public view returns (uint) {
        User storage userBerry = users[msg.sender];
        return userBerry.berries;
    }

    function getName() public view returns (string memory) {
        User storage user = users[msg.sender];
        return user.name;
    }

    function getBio() public view returns (string memory) {
        User storage user = users[msg.sender];
        return user.description;
    }

}
