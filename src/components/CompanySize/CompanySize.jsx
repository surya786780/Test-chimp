import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Count from "../Count/Count";
import Logo from "../../assets/testgorilla.svg";

import "../CreateAccount/CreateAccount.css";
import "./CompanySize.css";

import { UserContext } from "../../pages/Router";

function CompanySize() {
  const [data, setData] = useContext(UserContext);
  const navigate = useNavigate();
  function setCompanySize(values) {
    let val = {
      employeeRange: values,
    };
    console.log(val);
    setData({ ...val, ...data });
    navigate("/company-numberofhires", { replace: true });
  }

  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">How many people work in your company?</p>
          <div className="count1 d-flex cursor-pointer">
            <Count
              size={"1-50"}
              onClick={() => {
                setCompanySize("1-50");
              }}
            />
            <Count
              size={"51-200"}
              onClick={() => {
                setCompanySize("51-200");
              }}
            />
          </div>
          <div className="count1 d-flex cursor-pointer">
            <Count
              size={"201-1000"}
              onClick={() => {
                setCompanySize("201-1000");
              }}
            />
            <Count
              size={"1000+"}
              onClick={() => {
                setCompanySize("1000+");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySize;
