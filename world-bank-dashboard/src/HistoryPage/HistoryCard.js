import React from "react";
import { Button } from "@mui/material";
import "./HistoryCard.css";
import { styled, Paper } from "@mui/material";

export default function HistoryCard(props) {
  const created = props.historyItem.created_at;
  const startYear = props.historyItem.startYear;
  const endYear = props.historyItem.endYear;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    opacity: "90%",
  }));

  let historyCardText = `${props.historyItem.indicator} for ${props.historyItem.first_country}`;
  if (startYear && !endYear) historyCardText += ` for ${startYear}`;
  else if (startYear)
    historyCardText += ` from ${props.historyItem.startYear} to ${props.historyItem.endYear}`;
  else if (!startYear && !endYear) historyCardText += ` from 1960 to 2015`;
  return (
    <Item>
      <h3>{historyCardText}</h3>
      <h4>Searched on: {created}</h4>
      <Button variant="contained" onClick={props.handleViewClick}>
        View
      </Button>
    </Item>
  );
}
