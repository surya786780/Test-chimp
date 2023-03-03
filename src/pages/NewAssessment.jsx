import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateNewAssessment from "../components/CreateNewAssessment/CreateNewAssessment";
import Navbar from "../components/Navbar/Navbar";

function NewAssessment() {
  const [title, setTitle] = useState("untitled assessment");
  const [test, setTest] = useState(0);
  const [timer, setTimer] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="innerProfile">
        <div className="create-new-assessment pt-4 d-flex justify-content-between">
          <div className="back-nav d-flex fs-6">
            <Link to="/customer/assessment" className="link">
              <div className="border bg-white me-4 cursor-pointer">
                <span className="material-symbols-outlined fs-3 back-arrow">
                  chevron_left
                </span>
              </div>
            </Link>

            <div className="create-new-assessment">
              <span className="fs-5 fw-bold">Create new assessment</span>
              <div className="title-assessment d-flex">
                <span className="sec-color pe-3">{title}</span>
                <div className="sec-color pe-3 d-flex text-center">
                  <span className="material-symbols-outlined">bolt</span>
                  {test} tests
                </div>
                <div className="sec-color pe-3  d-flex text-center">
                  <span className="material-symbols-outlined sec-color pe-1">
                    timer
                  </span>
                  {timer} mins
                </div>
              </div>
            </div>
          </div>
          <div className="next-step pe-5">
            <div className="createAcc mt-0">Next step</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAssessment;
