import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import readCookieValue from "../italia";
import Networking from "../Networking";

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState([]);
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

  function handleViewClick() {
    setTimeout(() => navigate("/"), 250);
  }

  useEffect(() => {
    async function fetchingData() {
      await fetchData();
    }
    fetchingData();
  }, []);

  async function fetchData() {
    const sessionID = readCookieValue("sessionID");
    let response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/history?${sessionID}`
    );
    const json = await response.json();
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
