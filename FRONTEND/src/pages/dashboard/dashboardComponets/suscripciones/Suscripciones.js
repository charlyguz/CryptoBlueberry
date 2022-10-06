import React from "react";
import "./suscripciones.css";
// import {getProviderPlans,getAllGroups, createGroup, joinGroup} from "../../utils/berry-contract";


const Suscripciones = ({signer}) => {
  // const plansProvider = async function getProviderPlansD(signer, providerId) {
  //   const plans = await getProviderPlans(signer, providerId);
  //   return plans;
  // }
  
  // const allGroups = async function getAllGroupsD(signer) {
  //   const groups = await getAllGroups(signer);
  //   return groups;
  // }

  // async function createGroupD(signer, providerId, planId, name) {
  //   await createGroup(signer, providerId, planId, name);
  // }
  // async function joinGroupD(signer, groupId) {
  //   await joinGroup(signer, groupId);
  // }

  return (
    <section className="section__suscripciones-container">
        <h3 className="section__suscripciones-item-title">Suscripciones</h3>
        <div className="section__suscripciones-item"></div>
    </section>
  );
};

export default Suscripciones;
