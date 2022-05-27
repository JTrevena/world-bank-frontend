import React, { useState } from "react";
import Search from "./Search.js";
import Results from "./Results.js";
import "./Home.css";
import Header from "../Header.js";

export default function Home() {
  const [resultsData, setResultsData] = useState(undefined);

  function acquireResults(data) {
    setResultsData(data);
  }

  return (
    <div>
      <Header />
      <div className="bgd">
        <form className="search-wrapper">
          <Search acquireResults={acquireResults} />
        </form>
        <div className="results-wrapper">
          <Results results={resultsData} />
        </div>
      </div>
    </div>
  );
}
