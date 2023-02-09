import React, { useContext } from "react";
import Logo from "../../assets/testgorilla.svg";
import "../CreateAccount/CreateAccount.css";
import "../CompanySize/CompanySize.css";
import { UserContext } from "../../pages/Router";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Count from "../Count/Count";

function HiringPlan() {
  const navigate = useNavigate();
  const [data, setData] = useContext(UserContext);
  function setHiringNum(val) {
    let value = {
      planToHire: val,
    };
    setData({ ...value, ...data });
    navigate("/invite-team-members", { replace: true });
  }
  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">How many people work in your company?</p>
          <div className="count1 d-flex">
            <Count
              size={"1-5"}
              onClick={() => {
                setHiringNum("1-5");
              }}
            />

            <Count
              size={"6-10"}
              onClick={() => {
                setHiringNum("6-10");
              }}
            />
          </div>
          <div className="count1 d-flex">
            <Count
              size={"11-20"}
              onClick={() => {
                setHiringNum("11-20");
              }}
            />

            <Count
              size={"21-250"}
              onClick={() => {
                setHiringNum("21-250");
              }}
            />
          </div>

          <div className="count1 d-flex">
            <Count
              size={"251-1000"}
              onClick={() => {
                setHiringNum("251-1000");
              }}
            />

            <Count
              size={"1000+"}
              onClick={() => {
                setHiringNum("1000+");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringPlan;
