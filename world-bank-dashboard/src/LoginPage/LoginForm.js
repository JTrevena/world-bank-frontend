import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
import Networking from "../Networking.js";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
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
    else if (sessionID) {
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
      <h1 className="title">Sign in to World Bank</h1>
      <form className="login-user">
        <div className="username-wrapper">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            style={{
              backgroundColor: "white",
              opacity: "90%",
            }}
          />
        </div>
        <div className="password-wrapper">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "white",
              opacity: "90%",
            }}
          />
        </div>
        <div className="btn-wrapper">
          <Button
            variant="contained"
            onClick={handleSubmitClick}
            endIcon={<AccountBalanceIcon />}
          >
            Sign In
          </Button>
        </div>
        <div className="error-message">{displayError()}</div>
      </form>
      <div className="signup-link">
        <a href="https://world-bank-dashboard.netlify.app/sign-up">
          Don't have an account yet? Sign up here!
        </a>
      </div>
    </div>
  );
}
