import React, { useState } from "react";
import "./Home.css";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Networking from "../Networking";

export default function Search(props) {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");

  const networking = new Networking();

  function yearButtons() {
    let years = [];
    for (let i = 1960; i < 2023; i++) {
      years.unshift(i);
    }
    return years.map((year) => {
      return <MenuItem value={String(year)}>{String(year)}</MenuItem>;
    });
  }

  async function handleSearch() {
    const data = networking.searchQuery(country, indicator, startYear, endYear);
    props.acquireResults(data);
  }

  return (
    <div className="main-wrapper">
      <div className="search-form-wrapper">
        <form id="search-query">
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            helperText="Please enter your country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Indicators"
            variant="outlined"
            helperText="Please enter your indicators"
            onChange={(e) => setIndicator(e.target.value)}
          />
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="start-year">Year</InputLabel>
            <Select
              labelId="start-year"
              id="start-year"
              label="Year"
              onChange={(e) => setStartYear(e.target.value)}
              defaultValue=""
            >
              {yearButtons()}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="end-year">Year</InputLabel>
            <Select
              labelId="end-year"
              id="end-year"
              label="Year"
              onChange={(e) => setEndYear(e.target.value)}
              defaultValue=""
            >
              {yearButtons()}
            </Select>
          </FormControl>
        </form>
      </div>
      <div className="search-form-wrapper">
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}
