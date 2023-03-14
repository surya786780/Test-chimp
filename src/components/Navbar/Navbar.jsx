import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {
  profileValue,
  profileIcon,
  profileRoutes,
} from "../Contents/NavContents";

import "./Navbar.css";
import Logo from "../../assets/testgorilla.svg";
import FullProfile from "../../pages/FullProfile";
import QusSVG from "../SVGcomp/QusSVG";

function Navbar() {
  const [values, setValues] = useState({});
  // get last end point url
  const search = useLocation();
  const endPoint = search.pathname;
  // get last end point url

  // get data
  async function getData() {
    try {
      const url = `${
        import.meta.env.VITE_API_KEY_NODE
      }/user-service/users/user-info`;
      const userData = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") || "",
          // Authorization: localStorage.getItem("token") || "",
        },
      });

      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        localStorage.setItem("userDetails", JSON.stringify(userData.data.data));
      }
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getData();
    const d = localStorage.getItem("userDetails");
    const name = JSON.parse(d);
    setValues(name);
  }, []);
  // get data

  const [details, setDetails] = React.useState({
    language: "",
    jobRole: "",
    testType: "",
  });
  // console.log(comp);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(details);
  };

  return (
    <div className="navComp">
      <div className="navInner">
        <div className="logoNac">
          <img className="navLogo" src={Logo} alt="" />
        </div>
        <div className="list d-flex">
          <ul className="ul">
            <Link
              to={"/customer/assessment"}
              className={`link ${
                endPoint == "/customer/assessment" ? "fw-bold border-top-4" : ""
              }`}
            >
              <li>My assessments</li>
            </Link>
            <Link
              to={"/customer/candidate"}
              className={`link ${
                endPoint == "/customer/candidate" ? "fw-bold border-top-4" : ""
              }`}
            >
              <li>My candidates</li>
            </Link>
            <Link
              to={"/customer/tests"}
              className={`link ${
                endPoint == "/customer/tests" ? "fw-bold border-top-4" : ""
              }`}
            >
              <li>Tests</li>
            </Link>
          </ul>
          <ul className="endList d-flex ">
            <li className="border cursor-pointer">Talk to us</li>
            <li className="border cursor-pointer">Upgrade</li>
            <li className="qusSvg cursor-pointer">
              <QusSVG />
            </li>
            <div className="dropDownProfile d-flex align-items-center">
              {/* <li className="clientName cursor-pointer">Suryakumar a</li>
              <li className="arrowIcon mt-2 ms-3 cursor-pointer">
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li> */}

              <div className="clientName cursor-pointer">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  {values.firstName + " " + values.lastName}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {/* <FullProfile /> */}
                  {profileValue.map((e, index) => {
                    return (
                      <div key={index} className="">
                        <MenuItem onClick={handleClose}>
                          <Link to={profileRoutes[index]} className="link">
                            <div className="d-flex iconSpan">
                              <div className=" me-3">
                                <span className="material-symbols-outlined">
                                  {profileIcon[index]}
                                </span>
                              </div>
                              {e}
                            </div>
                          </Link>
                        </MenuItem>
                      </div>
                    );
                  })}
                </Menu>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
