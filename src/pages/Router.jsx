import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateAcc from "../components/CreateAccount/CreateAccount";
import HiringPlan from "../components/HiringPlan/HiringPlan";
import InviteTeam from "../components/InviteTeam/InviteTeam";
import Login from "../components/Login/Login";
import CompanySize from "../components/CompanySize/CompanySize";
import ResetPassword from "../components/Reset Password/ResetPassword";
import CustomerInfo from "../components/CustomerInfo/CustomerInfo";
import AssessmentHome from "./AssessmentHome";
import SetPassword from "../components/SetPassword/SetPassword";
import FullProfile from "./FullProfile";

export const UserContext = createContext();

function Router() {
  const [data, setData] = useState({});

  return (
    <UserContext.Provider value={[data, setData]}>
      <Routes>
        <Route path="/" element={<CreateAcc />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/customer-info" element={<CustomerInfo />} />
        <Route path="/company-size" element={<CompanySize />}></Route>
        <Route path="/company-numberofhires" element={<HiringPlan />}></Route>
        <Route path="/invite-team-members" element={<InviteTeam />}></Route>
        <Route path="/forgot-password" element={<ResetPassword />}></Route>
        <Route path="/setpassword" element={<SetPassword />}></Route>
        <Route path="/assessment" element={<AssessmentHome />}></Route>
        <Route path="/profile" element={<FullProfile />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default Router;
