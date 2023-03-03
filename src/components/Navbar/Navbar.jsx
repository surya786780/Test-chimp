import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function Navbar() {
  const d = localStorage.getItem("userDetails");
  const name = JSON.parse(d);
  // get data
  async function getData() {
    console.log("hitt");
    console.log(localStorage.getItem("token"));
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
            <Link to={"/customer/assessment"} className="link">
              <li>My assessments</li>
            </Link>
            <Link to={"/customer/candidate"} className="link">
              <li>My candidates</li>
            </Link>
            <Link to={"/customer/tests"} className="link">
              <li>Tests</li>
            </Link>
          </ul>
          <ul className="endList d-flex ">
            <li className="border cursor-pointer">Talk to us</li>
            <li className="border cursor-pointer">Upgrade</li>
            <li className="qusSvg cursor-pointer">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3.75C7.44321 3.75 3.75 7.44321 3.75 12C3.75 16.5568 7.44321 20.25 12 20.25C16.5568 20.25 20.25 16.5568 20.25 12C20.25 7.44321 16.5568 3.75 12 3.75ZM2.25 12C2.25 6.61479 6.61479 2.25 12 2.25C17.3852 2.25 21.75 6.61479 21.75 12C21.75 17.3852 17.3852 21.75 12 21.75C6.61479 21.75 2.25 17.3852 2.25 12ZM9.25 9.83301C9.25 8.31379 10.4808 7.08301 12 7.08301C13.5192 7.08301 14.75 8.31379 14.75 9.83301C14.75 11.0272 13.9717 11.6569 13.4302 12.0219L13.4293 12.0225C12.9717 12.33 12.75 12.5773 12.75 13V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V13C11.25 11.7891 12.0379 11.1504 12.5922 10.7778C13.0384 10.477 13.25 10.2387 13.25 9.83301C13.25 9.14222 12.6908 8.58301 12 8.58301C11.3092 8.58301 10.75 9.14222 10.75 9.83301C10.75 10.2472 10.4142 10.583 10 10.583C9.58579 10.583 9.25 10.2472 9.25 9.83301ZM11.25 16.75C11.247 16.336 11.583 16 11.997 16C12.414 16 12.75 16.336 12.75 16.75C12.75 17.164 12.414 17.5 12 17.5C11.586 17.5 11.25 17.164 11.25 16.75Z"
                  fill="black"
                ></path>
              </svg>
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
                  {name.firstName + name.lastName}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {/* <FullProfile /> */}
                  {profileValue.map((e, index) => {
                    return (
                      <div key={index} className="">
                        <MenuItem onClick={handleClose}>
                          <Link to={profileRoutes[index]} className="link">
                            <div className="d-flex iconSpan">
                              <div className=" me-3">{profileIcon[index]}</div>
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
