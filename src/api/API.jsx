// const { default: axios } = require("axios");
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

// export default async function Post({ path, data }) {
//   const navigate = useNavigate();

//   try {
//     const url = `${import.meta.env.VITE_API_KEY_NODE}${path}`;
//     const userData = await axios.post(url, data);
//     const { status } = userData.data || {};

//     if (status === "SUCCESS") {
//       console.log(userData);
//       navigate("/assessment", { replace: true });
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

function Request(method, url, data, actionDispatcher) {
  switch (method) {
    case "get":
      axios
        .get(url, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => actionDispatcher({ type: "success", data: res }))
        .catch((err) => actionDispatcher({ type: "error", data: err }));
      break;
    case "post":
      axios
        .post(url, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => actionDispatcher({ type: "success", data: res }))
        .catch((err) => actionDispatcher({ type: "error", data: err }));
      break;
    case "put":
      axios
        .put(url, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => actionDispatcher({ type: "success", data: res }))
        .catch((err) => actionDispatcher({ type: "error", data: err }));
    default:
      console.log("Invalid Method Name");
  }
}

export default Request;
