import React, { useState, useEffect } from "react";
import Networking from "../Networking.js";
import Search from "./Search.js";
import Results from "./Results.js";
import "./Home.css";
import Header from "../Header.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [resultsData, setResultsData] = useState(undefined);

  let navigate = useNavigate();
  const networking = new Networking();

  useEffect(() => {
    checkUserSession();
  });

  async function checkUserSession() {
    const res = await networking.verifyUserSession();
    const userLoggedIn = res.response;
    if (!userLoggedIn) navigate("/login");
    return userLoggedIn;
  }

  function acquireResults(data) {
    setResultsData(data);
  }

  return (
    <div>
      <Header />
      <div className="search-wrapper">
        <Search acquireResults={acquireResults} />
      </div>
      <div className="results-wrapper">
        <Results results={resultsData} />
      </div>
    </div>
  );
}
