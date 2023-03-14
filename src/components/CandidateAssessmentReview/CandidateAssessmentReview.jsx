import React, { useState, createContext } from "react";
import ModalComp from "../Modal/ModalComp";
import CandidateTestRating from "../MyCandidate/CandidateReviews/CandidateTestRating";
import CustomQuestions from "../MyCandidate/CandidateReviews/CustomQuestions";
import Review1 from "../MyCandidate/CandidateReviews/Review1";
import Review2 from "../MyCandidate/CandidateReviews/Review2";
import Review3 from "../MyCandidate/CandidateReviews/Review3";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
export const modalType = createContext();

function CandidateAssessmentReview() {
  const [value, setValue] = React.useState(0);
  const [popup, setPopup] = useState(false);
  const icons = ["cloud_upload", "mail", "frame_person_off"];

  const starsRating = (value) => {
    setValue(value);
  };
  const removeModal = () => {
    setPopup(false);
  };

  const callModal = (modalName) => {
    console.log(modalName);
    setPopup(true);
  };
  return (
    <div className="">
      <div className="CandidateAssessmentReview p-5 bg-white">
        <div className="review-1 d-flex justify-content-between mb-4">
          <div className="headings-and-stars">
            <div className="headings d-flex">
              <div>
                <p className="font-big fw-bold me-4">Assessment</p>
                <Box
                  sx={{
                    "& > legend": { mt: 0 },
                  }}
                >
                  <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    className="mt-2"
                  />
                </Box>
              </div>
              <p className="font-big">Copy of React</p>
            </div>
            <div className="starts mt-3"></div>
          </div>

          <div className="candidate-result d-flex">
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="download p-3 bg-gray me-2 h-fit cursor-pointer"
                  onClick={() => callModal(icon)}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
              );
            })}
          </div>
        </div>
        {popup ? (
          <ModalComp
            removeModalComp={removeModal}
            isActivate={true}
            headCont="Send results to candidate"
            bodyCont="An email with the results will be sent to this candidate. Your notes and ratings will not be shared."
            content="You can customize the results email "
          />
        ) : (
          <></>
        )}

        <div className="full-candidate-review">
          <div className="reviews mt-2 d-flex">
            <Review1 />
            <Review2 />
            <Review3 />
          </div>
          <CustomQuestions />
          <CandidateTestRating setRating={starsRating} />
        </div>
      </div>
    </div>
  );
}

export default CandidateAssessmentReview;
