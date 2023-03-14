import React from "react";

function Review2() {
  const testTitle = [
    "Communication",
    "Average score",
    "Persionality",
    "16 types",
    "Big 5 (OCEAN)",
    "DISC",
    "Enneagram",
  ];

  const scores = ["13%", "13%", "", "enTj", "EACSO", "DI", "Master"];
  return (
    <div className="Review2 ps-4 pe-4 ">
      <div className="test-score">
        <div className="test pb-2 d-flex justify-content-between border-bottom">
          <p className="fw-bold font-small">Test</p>
          <p className="fw-bold font-small">Score</p>
        </div>

        {testTitle.map((t, index) => {
          return (
            <div
              key={index}
              className="catogary mt-2 d-flex justify-content-between border-bottom"
            >
              {index == 2 ? (
                <p className="fw-bold font-small pt-2 pb-2 ps-2 pe-2">{t}</p>
              ) : (
                <>
                  <p className="font-small pt-2 pb-2 ps-2 pe-2">{t}</p>
                  <p className="font-small pt-2 pb-2 ps-2 pe-2">
                    {scores[index]}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review2;
