import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateAcc from "../components/CreateAccount/CreateAccount";
import Login from "../components/Login/Login";
import ResetPassword from "../components/Reset Password/ResetPassword";
import Signup_Details from "../components/Signup_Details/Signup_Details";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<CreateAcc />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgot-password" element={<ResetPassword />}></Route>
      <Route path="/customer-info" element={<Signup_Details />}></Route>
    </Routes>
  );
}

export default Router;
