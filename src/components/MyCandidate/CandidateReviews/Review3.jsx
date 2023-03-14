import React from "react";

function Review3() {
  const qus = [
    "Device used",
    "Location",
    "Filled out only once from IP address?",
    "Webcam enabled?",
    "Full-screen mode always active?",
    "Mouse always in assessment window?",
  ];
  const ans = [
    "Desktop",
    "Coimbatore (Tamil Nadu), IN",
    "yes",
    "yes",
    "No",
    "No",
  ];
  return (
    <div className="Review3 ps-4 pe-4 ">
      <div className="monitor">
        <div className="anti-cheating d-flex justify-content-between mb-4">
          <p className="fw-bold font-small">Anti cheating monitor</p>
          <span className="material-symbols-outlined">help</span>
        </div>
        <div className="monitors">
          {qus.map((t, index) => {
            return (
              <div key={index} className="d-flex justify-content-between">
                <p className="fw-bold font-small mb-2">{t}</p>
                <p
                  className={`font-small mb-4 small-padding fw-bold ${
                    index > 1
                      ? ans[index] == "yes"
                        ? "text-light yes"
                        : "text-light  no"
                      : ""
                  }`}
                >
                  {ans[index]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review3;
