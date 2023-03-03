import React from "react";

function Review1() {
  const title = [
    "Invited",
    "Completed",
    "Extra time breakdown",
    "Source",
    "Hiring stage",
  ];
  const body = [
    "March 1st, 2023",
    "March 2nd, 2023",
    "No extra time was granted to this candidate",
    "Invitation by email",
    "Not yet Evaluated",
  ];

  return (
    <div className="Review1">
      <div className="invited ">
        {title.map((t, index) => {
          return (
            <>
              <p className="fw-bold font-small mb-2">{t}</p>
              <p className="font-small mb-4">{body[index]}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Review1;
