import React, { useState } from "react";
function MyAssessment(props) {
  const [activeComp, setActiveComp] = useState(1);
  console.log(props.compNo, "in assess");
  return (
    <div className="myAssess">
      <div className="activeBtn d-flex">
        <p
          className={`active1 ${activeComp == 1 ? "bgActive" : ""}`}
          onClick={() => setActiveComp(1)}
        >
          Active
        </p>
        <p
          className={`active ${activeComp == 2 ? "bgActive" : "bgNormal"}`}
          onClick={() => setActiveComp(2)}
        >
          Archieved
        </p>
      </div>
      <div>
        {activeComp == 1 ? (
          <div className="imgComps">
            <img
              src="https://app.testgorilla.com/assets/product_tour_thumbnail.png"
              alt=""
              className="vdoImg"
              //   style={{ height: 480, width: 960, display: "flex" }}
            />
          </div>
        ) : (
          <>
            <div className="archieveComp">
              <img
                src="https://app.testgorilla.com/assets/telescopio.svg"
                alt=""
                className="archiveImg"
              />
            </div>
            <p className="noArchieve archieveComp">
              You have no archived assessments.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default MyAssessment;
