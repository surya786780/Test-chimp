import React from "react";
import Review1 from "../MyCandidate/CandidateReviews/Review1";
import Review2 from "../MyCandidate/CandidateReviews/Review2";
import Review3 from "../MyCandidate/CandidateReviews/Review3";
import Navbar from "../Navbar/Navbar";

function CandidateAssessmentReview() {
  const stars = [1, 2, 3, 4, 5];
  const icons = ["cloud_upload", "mail", "frame_person_off"];
  return (
    <div className="">
      <div className="CandidateAssessmentReview p-5 bg-white">
        <div className="review-1 d-flex justify-content-between mb-4">
          <div className="headings-and-stars">
            <div className="headings d-flex">
              <p className="font-big fw-bold me-4">Assessment</p>
              <p className="font-big">Copy of React</p>
            </div>
            <div className="starts mt-3">
              {stars.map((star) => {
                return (
                  <span
                    key={star}
                    className="material-symbols-outlined me-1 color-gray"
                  >
                    star
                  </span>
                );
              })}
            </div>
          </div>

          <div className="candidate-result d-flex">
            {icons.map((icon) => {
              return (
                <div className="download p-3 bg-gray me-2 h-fit">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reviews mt-2 d-flex">
          <Review1 />
          <Review2 />
          <Review3 />
        </div>
      </div>
    </div>
  );
}

export default CandidateAssessmentReview;
