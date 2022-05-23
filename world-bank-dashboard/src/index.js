import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home.js";
import Login from "./LoginPage/Login";
import Signup from "./SignupPage/Signup";
import History from "./HistoryPage/History";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
