import React, { useState } from "react";
import FullProfile from "../../pages/FullProfile";
import Modals from "../Modals/Modals";
import Navbar from "../Navbar/Navbar";
import SupportBtn from "../SupportBtn";
import Tables from "../Tables/Tables";

function TeamManagement() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="innerProfile bg-gray">
        <FullProfile />
        <div className="teamManagement pt-4 sub-comps bg-white">
          <div className="addMembers d-flex justify-content-between align-items-center ps-5 pe-5">
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
          <div className="teamManagementTable p-5">
            <Tables />
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <SupportBtn />
    </>
  );
}

export default TeamManagement;
