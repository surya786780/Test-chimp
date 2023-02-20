import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Router";
import axios from "axios";
import Count from "../Count/Count";

import Logo from "../../assets/testgorilla.svg";

import "../CompanySize/CompanySize.css";
import "../CreateAccount/CreateAccount.css";

function HiringPlan() {
  const navigate = useNavigate();
  const [data, setData] = useContext(UserContext);

  function setHiringNum(val) {
    let value = {
      planToHire: val,
    };
    setData({ ...value, ...data });
    sendData();
  }

  async function sendData() {
    console.log("hitt");
    // axios
    //   .post(`${import.meta.env.VITE_APP_KEY}/authenticate/signup`, data)
    //   .then((res) => {
    //     if (res.data.status === "SUCCESS") {
    //       console.log(res);
    //       navigate("/assessment", { replace: true });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      const url = `${import.meta.env.VITE_API_KEY_JAVA}/saveUserDetails`;
      const userData = await axios.post(url, data, {
        headers: {
          // 'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
          Authorization: localStorage.getItem("token") || "",
        },
      });
      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        console.log(userData);
        navigate("/invite-team-members", { replace: true });
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">How many people work in your company?</p>
          <div className="count1 d-flex cursor-pointer">
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
          <div className="count1 d-flex cursor-pointer">
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

          <div className="count1 d-flex cursor-pointer">
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
