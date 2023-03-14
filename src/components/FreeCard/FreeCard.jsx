import React, { useEffect, useState, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import axios from "axios";

function FreeCard() {
  const d = localStorage.getItem("test-details");
  const tests = JSON.parse(d);
  // const [tests, setTests] = useState([]);
  const datalength = [0, 1, 2, 3];
  // setTests(testData);

  // console.log(testData[0]);
  const isFirstRender = useRef(true);

  async function getData() {
    try {
      const url = `${
        import.meta.env.VITE_API_KEY_NODE
      }/assessment-service/tests/5/0`;
      const userData = await axios.get(url);

      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        console.log("hello");
        // setTests(userData.data.data);
        localStorage.setItem(
          "test-details",
          JSON.stringify(userData.data.data)
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      getData();
    }
  }, []);
  // get data

  return (
    <div className="d-flex">
      {datalength.map((d) => {
        return (
          <>
            <div className="card">
              {console.log(d)}
              <div className="cardHead">{tests[d]?.title}</div>
              <div className="cardBody">
                <p>{tests[d]?.shortDescription}</p>
              </div>
              <div className="cardFooter">
                <div className="timingForTest d-flex">
                  <span className="material-symbols-outlined">timer</span>
                  {+tests[d]?.duration / 60} mins
                </div>
                <div className="detailsForTest d-flex">
                  <Tooltip title="Preview" placement="bottom">
                    <IconButton>
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </IconButton>
                  </Tooltip>
                  <div className="testDetails">Details</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FreeCard;
