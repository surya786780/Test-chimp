import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    const d = localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center text-center w-100 fs-1"
      style={{ height: "100vh" }}
    ></div>
  );
}

export default Logout;
