import React, { useEffect } from "react";
import axios from "axios";

function MonthPlan() {
  // get data
  async function getData() {
    console.log("hitt");
    console.log(localStorage.getItem("token"));
    try {
      const url = `${
        import.meta.env.VITE_API_KEY_NODE
      }/user-service/team/plans`;
      const userData = await axios.get(url);

      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        console.log(userData);
        localStorage.setItem("paidPlans", JSON.stringify(userData.data.data));
      }
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  // get data

  const d = localStorage.getItem("paidPlans");
  const values = JSON.parse(d);
  const plan = values[0];
  console.log(plan);

  return (
    <div className="paidPlan">
      <span className="fs-3 fw-light">
        Do more with our <strong className="">{plan.name}</strong>
        plan
      </span>

      <div className="amountToPay">
        <div className="monthAmount">
          <span className="fs-5 pri-color fw-bold">
            &#8377; {plan.price} per month
          </span>
          <br />
          <span className="yearSubscription text-muted">
            billed at ₹19,800 per year
          </span>
        </div>

        <div className="paidPlanAdvantages font-small fw-light">
          <div className="paidPlanCandidates mb-3 pt-3 mt-2 border-top">
            <div className="d-flex align-items-center mb-1">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong>{plan.candidate_count} candidates </strong>included
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1"> Additional candidates for ₹80 each </span>
            </div>
          </div>
          <div className="paidPlanAssessment mb-3 pt-3 mt-2 border-top">
            <div className="d-flex align-items-center mb-1">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong>{plan.assessment_count} assessment </strong>included
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                Additional assessments for &#8377;
                {plan.additional_assessment_price}&nbsp; each
              </span>
            </div>
          </div>
          <div className="paidPlanTests mb-3 pt-3 mt-2 border-top">
            <div className="d-flex align-items-center mb-1">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong>{plan.test_count_per_assessment} tests </strong>per
                assessment
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong className="me-2">
                  Up to {plan.custom_question_count_per_assessment} custom
                  questions
                </strong>
                per assessments
              </span>
            </div>
          </div>
          <div className="paidPlanaAdv mb-3 pt-3 mt-2 border-top">
            <div className="d-flex align-items-center mb-1">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                All&nbsp;
                <strong className="me-2">985+ tests</strong> in the test library
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                Custom question types:
                <strong className="me-2">
                  essay, multiple-choice, and file upload
                </strong>
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">Welcome video for candidates</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong className="me-2">Unlimited</strong> account users
              </span>
            </div>
          </div>
        </div>

        <div className="upgradePaidPlan font-small d-flex align-items-center">
          <div className="upgradePlan createAcc me-4">
            Upgrade to pay as you go
          </div>
          <span className="mt-3">
            or see other{" "}
            <span className="pri-color cursor-pointer pPlan">plan</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MonthPlan;
