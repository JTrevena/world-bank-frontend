import React, { useState } from "react";
import "./Home.css";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import Networking from "../Networking";
import indicators from "../data/indicators.json";
import "./Search.css";

export default function Search(props) {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");
  const options = indicators["results"];

  const networking = new Networking();

  function yearButtons() {
    let years = [];
    for (let i = 1960; i < 2016; i++) {
      years.unshift(i);
    }
    return years.map((year) => {
      return <MenuItem value={String(year)}>{String(year)}</MenuItem>;
    });
  }

  async function handleSearch() {
    const data = await networking.searchQuery(
      country,
      indicator.indicatorname,
      startYear,
      endYear
    );
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

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.indicatorname}
            value={indicator}
            onChange={(e, newInputValue) => {
              setIndicator(newInputValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Indicator" />
            )}
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
