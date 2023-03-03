import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/NewAssessment.css";
import Navbar from "../Navbar/Navbar";

function CreateNewAssessment() {
  const [title, setTitle] = useState("untitled assessment");
  const [test, setTest] = useState(0);
  const [timer, setTimer] = useState(0);

  let [active, setActive] = useState(true);
  return (
    <>
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
        <div className="new-assessment mt-4">
          <div className="testComponents d-flex justify-content-between text-center mt-5">
            .
            <Link to={"/customer/assessment/name-assessment"} className="link">
              <div className="cursor-pointer">
                <p
                  className={`round-comps ms-5 me-5 sec-bgcolor ${
                    active ? "active-test" : "not-active-test"
                  }`}
                >
                  1
                </p>
                <p className="sec-color test-comp-name">Name Assessment</p>
              </div>
            </Link>
            <div className={`border-Div active-test`}></div>
            <Link to={"/customer/assessment/select-tests"} className="link">
              <div className="cursor-pointer">
                <p
                  className={`round-comps ms-5 me-5 sec-bgcolor ${
                    active ? "active-test" : "not-active-test"
                  }`}
                >
                  2
                </p>
                <p className="sec-color test-comp-name">Select tests</p>
              </div>
            </Link>
            <div
              className={`border-Div ${
                active ? "active-test" : "not-active-test"
              }`}
            ></div>
            <Link to={"/customer/assessment/add-questions"} className="link">
              <div className="cursor-pointer">
                <p
                  className={`round-comps ms-5 me-5 sec-bgcolor ${
                    active ? "active-test" : "not-active-test"
                  }`}
                >
                  3
                </p>
                <p className="sec-color test-comp-name">Add questions</p>
              </div>
            </Link>
            <div
              className={`border-Div ${
                active ? "active-test" : "not-active-test"
              }`}
            ></div>
            <Link to={"/customer/assessment/review-configure"} className="link">
              <div className="cursor-pointer">
                <p
                  className={`round-comps ms-5 me-5 sec-bgcolor ${
                    active ? "active-test" : "not-active-test"
                  }`}
                >
                  4
                </p>
                <p className="sec-color test-comp-name">Review & configure</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNewAssessment;
