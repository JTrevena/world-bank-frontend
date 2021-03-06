import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Autocomplete } from "@mui/material";
import Networking from "../Networking";
import indicators from "../data/indicators.json";
import countries from "../data/countries.json";
import "./Search.css";
import readCookieValue from "../readCookieValue.js";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function Search(props) {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");
  const indicatorOptions = indicators["results"];
  const countryOptions = countries["results"];

  const networking = new Networking();

  useEffect(() => {
    if (props.historySearch) {
      handleHistorySearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleHistorySearch() {
    const sessionID = readCookieValue("sessionID");
    const data = await networking.searchQuery(
      props.historySearch.first_country,
      props.historySearch.indicator,
      props.historySearch.start_year,
      props.historySearch.end_year,
      sessionID
    );
    props.acquireResults(data);
  }

  function yearButtons() {
    let years = [];
    for (let i = 1960; i < 2016; i++) {
      years.unshift(i);
    }
    return years.map(year => {
      return <MenuItem value={String(year)}>{String(year)}</MenuItem>;
    });
  }

  async function handleClear() {
    setCountry("");
    setIndicator("");
    setStartYear("");
    setEndYear("");
  }

  async function handleSearch() {
    const sessionID = readCookieValue("sessionID");
    const data = await networking.searchQuery(
      country.countryname,
      indicator.indicatorname,
      startYear,
      endYear,
      sessionID
    );
    props.acquireResults(data);
    props.search();
  }

  return (
    <div className="main-wrapper">
      <div className="search-form-wrapper">
        <div className="fields-wrapper">
          <div className="country-select">
            <Autocomplete
              disablePortal
              id="country-select"
              options={countryOptions}
              getOptionLabel={option => option.countryname || [""]}
              value={country}
              onChange={(e, newInputValue) => {
                setCountry(newInputValue);
              }}
              sx={{ width: 300 }}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Country (Required)"
                  variant="outlined"
                  style={{
                    backgroundColor: "white",
                    opacity: "90%",
                  }}
                />
              )}
            />
          </div>
          <div className="indicator-select">
            <Autocomplete
              disablePortal
              id="indicator-select"
              options={indicatorOptions}
              getOptionLabel={option => option.indicatorname || [""]}
              value={indicator}
              onChange={(e, newInputValue) => {
                setIndicator(newInputValue);
              }}
              sx={{ width: 300 }}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Indicator (Random if left blank)"
                  variant="outlined"
                  style={{
                    backgroundColor: "white",
                    opacity: "90%",
                  }}
                />
              )}
            />
          </div>
          <div className="start-year">
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel id="start-year">Start Year</InputLabel>
              <Select
                labelId="start-year"
                id="start-year"
                label="Year"
                onChange={e => setStartYear(e.target.value)}
                defaultValue=""
                value={startYear}
                style={{
                  backgroundColor: "white",
                  opacity: "90%",
                }}
              >
                {yearButtons()}
              </Select>
            </FormControl>
          </div>
          <div className="end-year">
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel id="end-year">End Year</InputLabel>
              <Select
                labelId="end-year"
                id="end-year"
                label="Year"
                onChange={e => setEndYear(e.target.value)}
                defaultValue=""
                value={endYear}
                style={{
                  backgroundColor: "white",
                  opacity: "90%",
                }}
              >
                {yearButtons()}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="buttons-wrapper">
          <div className="clear-btn">
            <Button variant="contained" color="error" onClick={handleClear} endIcon={<ClearIcon />}>
              Clear
            </Button>
          </div>
          <div className="search-form-btn">
            <Button variant="contained" color="success" onClick={handleSearch} endIcon={<SearchIcon />}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
