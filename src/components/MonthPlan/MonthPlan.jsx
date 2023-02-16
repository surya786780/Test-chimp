import React from "react";

function MonthPlan() {
  return (
    <div className="paidPlan">
      <span className="fs-3 fw-light">
        Do more with our <strong className="pe-2">Pay as you go INR</strong>
        plan
      </span>

      <div className="amountToPay">
        <div className="monthAmount">
          <span className="fs-5 pri-color fw-bold">
            &#8377; 1,650 per month
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
                <strong>100 candidates </strong>included
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
                <strong>1 assessment </strong>included
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                Additional assessments for ₹10,000 each
              </span>
            </div>
          </div>
          <div className="paidPlanTests mb-3 pt-3 mt-2 border-top">
            <div className="d-flex align-items-center mb-1">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong>5 tests </strong>per assessment
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined pri-color">
                check_circle
              </span>
              <span className="ms-1">
                <strong className="me-2">Up to 10 custom questions</strong>
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
                All
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
