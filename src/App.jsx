import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormikConcepts from "./components/FormikConcepts/FormikConcepts";

function App() {
  return (
    <BrowserRouter>
      <Router />
      {/* <FormikConcepts /> */}
    </BrowserRouter>
  );
}

export default App;
