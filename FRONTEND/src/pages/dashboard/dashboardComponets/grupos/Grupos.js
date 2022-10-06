import React from "react";
import "./grupos.css";
import {getUserGroups} from "../../../utils/berry-contract";

const Grupos = ({signer}) => {

  const groups = async function getUserGroupsD(signer) {
    const groups = await getUserGroups(signer);
    return groups;
  }

  return (
    <section className="section__grupos-container">
      <h3 className="section__grupos-item-title">Grupos</h3>
      <div className="section__grupos-item">{groups(signer)}</div>
    </section>
  );
};

export default Grupos;
