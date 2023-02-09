import React from "react";
import { useState, createContext } from "react";

import Navbar from "../components/Navbar/Navbar";
import MyAssessment from "../components/MyAssessment/MyAssessment";
import MyCandidate from "../components/MyCandidate/MyCandidate";
import TestComp from "../components/TestComp/TestComp";
import AssessmentSettings from "../components/AssessmentSettings/AssessmentSettings";
import IntegrationComp from "../components/IntegrationComp/IntegrationComp";
import MyCompany from "../components/MyCompany/MyCompany";
import MyProfile from "../components/MyProfile/MyProfile";
import Notification from "../components/Notification/Notification";
import PlanAndBilling from "../components/PlanAndBilling/PlanAndBilling";
import TeamManagement from "../components/TeamManagement/TeamManagement";
import SupportBtn from "../components/SupportBtn";

import "../styles/AssessmentHome.css";
import CreateNewAssessmentBtn from "../components/CreateNewAssessmentBtn/CreateNewAssessmentBtn";
import FullProfile from "./FullProfile";

export const ComponentSelection = createContext();

function AssessmentHome() {
  const [comp, setComp] = useState(1);
  // console.log(comp);

  return (
    <ComponentSelection.Provider value={[comp, setComp]}>
      <Navbar />
      <div className="box">
        {comp <= 3 ? <CreateNewAssessmentBtn /> : <></>}

        <div className="assessment">
          {/* {(() => {
            if (comp === 1) return <MyAssessment />;
            else if (comp === 2) return <MyCandidate />;
            else return <TestComp />;
          })()} */}

          {(() => {
            if (comp === 1) return <MyAssessment />;
            else if (comp === 2) return <MyCandidate />;
            else if (comp === 3) return <TestComp />;
            else if (comp > 3) {
              return (
                <>
                  <FullProfile />
                  {(() => {
                    if (comp === 4) return <MyProfile />;
                    else if (comp === 5) return <Notification />;
                    else if (comp === 6) return <MyCompany />;
                    else if (comp === 7) return <TeamManagement />;
                    else if (comp === 8) return <PlanAndBilling />;
                    else if (comp === 9) return <IntegrationComp />;
                    else return <AssessmentSettings />;
                  })()}
                </>
              );
            }
          })()}
        </div>
        <div className="footer"></div>
      </div>
      <SupportBtn />
    </ComponentSelection.Provider>
  );
}

export default AssessmentHome;
