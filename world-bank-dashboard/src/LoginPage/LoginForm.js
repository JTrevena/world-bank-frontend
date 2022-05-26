import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
import Networking from "../Networking.js";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const networking = new Networking();

  async function handleSubmitClick() {
    const sessionID = await networking.userLoginAttempt(username, password);
    if (sessionID.error) setError(true);
    else {
      await logUserIn(sessionID);
      navigate("/");
    }
  }

  async function logUserIn(sessionID) {
    setError(false);
    document.cookie = `sessionID=${sessionID}`;
  }

  function displayError() {
    if (error) return <Alert severity="error">Incorrect details</Alert>;
  }

  return (
    <div className="main-wrapper">
      <form id="login-user">
        <div className="login-wrapper">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-wrapper">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-wrapper">
          <Button variant="contained" onClick={handleSubmitClick}>
            Submit
          </Button>
        </div>
      </form>
      <div className="error-message">{displayError()}</div>
    </div>
  );
}
