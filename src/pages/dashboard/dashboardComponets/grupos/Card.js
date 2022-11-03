import "./grupos.css";
import abi from "../../../../contract/Berry.json";
import { ethers, BigNumber } from "ethers";
import { getUserGroups } from "../../../../utils/berry-contract";


const addres = "0xf25137694E130Fb87735a87C49691054a34cD930";
export const Card = () => {
  // export const getAllGroups = async (berry: Berry ) => {
  //   const totalGroups = (await berry.numGroups()).toNumber()
  
  //   return Promise.all(Array.from({ length: totalGroups }, async (_, groupID) => await berry.groups(groupID)))
  // }
// const groups = async function getUserGroupsD(signer) {
//     const groups = await getUserGroups(signer);
//     return groups;
//   }
  async function getAllGroups() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(addres, abi.abi, signer);
      try {
        // const result = await createGroup(contract, 1, 0, "Grupo 1", {
        //   value: ethers.utils.parseEther("0.03"),
        console.log(signer);
        const result = await getUserGroups(contract, signer);
        console.log(result);
      }catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
        <div className="section__grupos-item-container">
          <div className="section__grupos-item-container--img">
            <img src={require("./../../../../assets/img/Coursera.svg").default} alt="img" className="imagen"/>
          </div>
          <div className="section__grupos-item-container--text">
            <h4>Coursera</h4>
            <p>Membresia</p>
            <p className="section__grupos-item-container--price" onClick={getAllGroups}>Precio: .03 aqui es picame<small>RBTC</small></p>
          </div>
        </div>
    </>
  )
}
