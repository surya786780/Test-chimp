import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function CandidateTestRating({ setRating }) {
  const [value, setValue] = React.useState(0);
  const setStarRating = (val) => {
    setRating(val);
  };

  return (
    <div className="CandidateTestRating d-flex border-top">
      <div className="your-rating w-50 mt-4">
        <div className=" mb-3 fw-bold">Your rating</div>
        <div className=" mb-4">
          Give your personal overall rating of this candidate based on your
          impressions and
          <br /> interactions with him or her.
        </div>
        <div className="star-color">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onClick={setStarRating(value)}
            />
          </Box>
          {/* {[1, 1, 1, 1, 1].map((star, index) => {
            return (
              <span
                key={index}
                className="material-symbols-outlined me-1 star-color p-0 star-rating"
              >
                star
              </span>
            );
          })} */}
        </div>
      </div>
      <div className="your-notes w-50 p-3 mt-4">
        <textarea name="" id="" cols="60" rows="5" aria-label="i"></textarea>
      </div>
    </div>
  );
}

export default CandidateTestRating;
