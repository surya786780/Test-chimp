import React, { useState } from "react";
import Modals from "../Modals/Modals";
import Tables from "../Tables/Tables";

function TeamManagement() {
  const [modal, setModal] = useState(false);

  return (
    <div className="teamManagement">
      <div className="addMembers d-flex justify-content-between align-items-center">
        <p className="addRemove">Add or remove team members</p>
        <div
          className="addUser d-flex align-items-center cursor-pointer"
          onClick={() => {
            setModal(!modal);
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className="material-symbols-outlined pe-2">add_circle</span>
          <span>
            <i>Add user (1/5)</i>
          </span>
        </div>
      </div>
      <Modals
        title={"Add new team members"}
        body={"You can always add and edit team members in the settings."}
      />
      <div className="teamManagementTable">
        <Tables />
      </div>
    </div>
  );
}

export default TeamManagement;
