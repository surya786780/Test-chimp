import React from "react";
import FullProfile from "../../pages/FullProfile";
import MonthPlan from "../MonthPlan/MonthPlan";
import Navbar from "../Navbar/Navbar";
import SupportBtn from "../SupportBtn";

function PlanAndBilling() {
  return (
    <>
      <Navbar />
      <div className="innerProfile bg-gray">
        <FullProfile />
        <div className="d-flex p-5 sub-comps bg-white">
          <div className="freePlanBilling">
            <div className="freePlanTop d-flex justify-content-between mb-4 align-items-center">
              <span className="font-small fw-bold ">Your current plan.</span>
              <div className="createAcc changePlanBill">Change plan</div>
            </div>
            <p className="fs-3 fw-bold">Free</p>
            <span className="font-small fw-light mt-4">
              With Free, you can use a selected number of tests and ten custom
              question per assessment for free for an unlimited number of
              candidates and assessments.
            </span>
            <div className="currentPlan mt-4 d-flex align-items-center">
              <span className="material-symbols-outlined pe-2">
                check_circle
              </span>
              <span className="fw-light font-small">
                Your current plan will never expire.
              </span>
            </div>
            <div className="emptyDiv"></div>
            <div className="paymentMethod cursor-pointer">Payment method</div>
          </div>

          <>
            <MonthPlan />
          </>
        </div>
        <div className="footer"></div>
      </div>
      <SupportBtn />
    </>
  );
}

export default PlanAndBilling;
