import React, { useState } from "react";
import Search from "./Search.js";
import Results from "./Results.js";
import "./Home.css";

export default function Home() {
  const [resultsData, setResultsData] = useState(undefined);

  function acquireResults(data) {
    setResultsData(data);
  }

  return (
    <div>
      <div className="search-wrapper">
        <Search acquireResults={acquireResults} />
      </div>
      <div className="results-wrapper">
        <Results results={resultsData} />
      </div>
    </div>
  );
}
