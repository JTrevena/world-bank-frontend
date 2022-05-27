import React, { useState, useEffect } from "react";
import HistoryCard from "./HistoryCard";
import { useNavigate } from "react-router-dom";
import Networking from "../Networking";
import { Stack, Box } from "@mui/material";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    const history = (await networking.getUserHistory()).response;
    setSearchHistory(history);
  }

  function searchHistoryDisplay() {
    return searchHistory.map((historyItem, i) => {
      return (
        <HistoryCard
          key={i}
          handleViewClick={handleViewClick}
          historyItem={historyItem}
        />
      );
    });
  }
  return (
    <div>
      <Box>
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {searchHistoryDisplay()}
        </Stack>
      </Box>
    </div>
  );
}
