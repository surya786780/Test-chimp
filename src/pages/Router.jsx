import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateAcc from "../components/CreateAccount/CreateAccount";
import HiringPlan from "../components/HiringPlan/HiringPlan";
import InviteTeam from "../components/InviteTeam/InviteTeam";
import Login from "../components/Login/Login";
import CompanySize from "../components/CompanySize/CompanySize";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import CustomerInfo from "../components/CustomerInfo/CustomerInfo";
import SetPassword from "../components/SetPassword/SetPassword";
import MyAssessment from "../components/MyAssessment/MyAssessment";
import MyCandidate from "../components/MyCandidate/MyCandidate";
import TestComp from "../components/TestComp/TestComp";
import LandingPage from "./index";
import MyProfile from "../components/MyProfile/MyProfile";
import Notification from "../components/Notification/Notification";
import MyCompany from "../components/MyCompany/MyCompany";
import TeamManagement from "../components/TeamManagement/TeamManagement";
import PlanAndBilling from "../components/PlanAndBilling/PlanAndBilling";
import IntegrationComp from "../components/IntegrationComp/IntegrationComp";
import AssessmentSettings from "../components/AssessmentSettings/AssessmentSettings";
import SelectTests from "../components/SelectTests/SelectTests";
import AddQuestions from "../components/AddQuestions/AddQuestions";
import ReviewAndConfigure from "../components/ReviewAndConfigure/ReviewAndConfigure";
import NameAssessment from "../components/NameAssessment/NameAssessment";

import "../styles/AssessmentHome.css";
import CandidateTestData from "../components/CandidateTestData/CandidateTestData";
import ReferAndEarn from "../components/ReferAndEarn/ReferAndEarn";
import Logout from "../components/Logout/Logout";

export const UserContext = createContext();

function Router() {
  const [data, setData] = useState({});
  return (
    <UserContext.Provider value={[data, setData]}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/create-account" element={<CreateAcc />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/customer-info" element={<CustomerInfo />} />
        <Route path="/company-size" element={<CompanySize />}></Route>
        <Route path="/company-numberofhires" element={<HiringPlan />}></Route>
        <Route path="/invite-team-members" element={<InviteTeam />}></Route>
        <Route path="/forgot-password" element={<ResetPassword />}></Route>
        <Route path="/set-password" element={<SetPassword />}></Route>
        <Route path="/customer/assessment" element={<MyAssessment />}></Route>
        <Route path="/customer/candidate" element={<MyCandidate />}></Route>
        <Route path="/customer/tests" element={<TestComp />}></Route>
        <Route path="/profile/profile" element={<MyProfile />}></Route>
        <Route path="/profile/notification" element={<Notification />}></Route>
        <Route path="/profile/mycompany" element={<MyCompany />}></Route>
        <Route
          path="/profile/team-management"
          element={<TeamManagement />}
        ></Route>
        <Route
          path="/profile/plan-and-billing"
          element={<PlanAndBilling />}
        ></Route>
        <Route
          path="/profile/integration"
          element={<IntegrationComp />}
        ></Route>
        <Route
          path="/profile/assessment-settings"
          element={<AssessmentSettings />}
        ></Route>
        <Route path="/profile/refer-earn" element={<ReferAndEarn />}></Route>
        <Route path="/profile/logout" element={<Logout />}></Route>
        <Route
          path="/customer/assessment/name-assessment"
          element={<NameAssessment />}
        ></Route>
        <Route
          path="/customer/assessment/select-tests"
          element={<SelectTests />}
        ></Route>
        <Route
          path="/customer/assessment/add-questions"
          element={<AddQuestions />}
        ></Route>
        <Route
          path="/customer/assessment/review-configure"
          element={<ReviewAndConfigure />}
        ></Route>
        <Route
          path="/customer/candidate/candidatePage"
          element={<CandidateTestData />}
        ></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default Router;
