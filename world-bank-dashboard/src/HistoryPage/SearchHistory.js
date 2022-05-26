import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState([]);
  let navigate = useNavigate();

  function handleViewClick() {
    setTimeout(() => navigate("/"), 500);
  }

  useEffect(() => {
    async function fetchingData() {
      await fetchData();
    }
    fetchingData();
  }, []);

  async function fetchData() {
    let response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/history`
    );
    let json = await response.json();
    setSearchHistory(json);
  }

  function searchHistoryDisplay() {
    searchHistory.forEach((search) => {
      return (
        <div>
          <h3>
            ${search.indicator} for ${search.country} from ${search.startYear}{" "}
            to ${search.endYear}
          </h3>
          <Button variant="contained" onClick={handleViewClick}>
            View
          </Button>
        </div>
      );
    });
  }
  return <div>{searchHistoryDisplay}</div>;
}
