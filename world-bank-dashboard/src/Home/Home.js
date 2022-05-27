import React, { useState, useEffect } from "react";
import Networking from "../Networking.js";
import Search from "./Search.js";
import Results from "./Results.js";
import "./Home.css";
import Header from "../Header.js";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home(props) {
  const [resultsData, setResultsData] = useState(undefined);
  const [searched, setSearched] = useState(false);
  const { state } = useLocation();

  let navigate = useNavigate();
  const networking = new Networking();

  useEffect(() => {
    checkUserSession();
  });

  function search() {
    setSearched(true);
  }

  async function checkUserSession() {
    const res = await networking.verifyUserSession();
    const userLoggedIn = res.response;
    if (!userLoggedIn) navigate("/login");
    return userLoggedIn;
  }

  function acquireResults(data) {
    setResultsData(data);
  }

  function graphTitle() {
    const startYear = resultsData[0].year;
    const endYear = resultsData[resultsData.length - 1].year;
    let graphTitleText = `${resultsData[0].indicatorname} for ${resultsData[0].countryname}`;
    if (startYear && !endYear) graphTitleText += ` for ${startYear}`;
    else if (startYear) graphTitleText += ` from ${startYear} to ${endYear}`;
    else if (!startYear && !endYear) graphTitleText += ` from 1960 to 2015`;
    return graphTitleText;
  }

  return (
    <div>
      <Header />
      <div className="bgd">
        <form className="search-wrapper">
          <Search
            acquireResults={acquireResults}
            historySearch={state}
            search={search}
          />
        </form>
        {searched && resultsData && (
          <h2 className="graph-title">
            {resultsData.length === 0 ? "" : graphTitle()}
          </h2>
        )}
        <div className="results-wrapper">
          <Results results={resultsData} />
        </div>
      </div>
    </div>
  );
}
