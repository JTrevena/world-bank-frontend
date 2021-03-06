import React, { useState } from "react";
import "./Signup.css";
import Networking from "../Networking.js";
import { Button, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Signup(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmationInput, setPasswordConfirmationInput] =
    useState("");
  const [accountCreationAttempts, setAccountCreationAttempts] = useState(0);
  const [accountCreationSuccess, setAccountCreationSuccess] = useState(false);
  let navigate = useNavigate();

  const networking = new Networking();

  async function handleSubmit(e) {
    if (passwordInput === passwordConfirmationInput) {
      const response = await networking.createAccount(
        usernameInput,
        passwordInput
      );
      response.error
        ? setAccountCreationSuccess(false)
        : setAccountCreationSuccess(true);
      setAccountCreationAttempts(accountCreationAttempts + 1);
    }
  }

  function displayResponseMessage() {
    if (accountCreationAttempts > 0) {
      if (!accountCreationSuccess) {
        return <Alert severity="error">Account could not be created</Alert>;
      } else {
        setTimeout(() => navigate("/login"), 1000);
        return <Alert severity="success">Account created</Alert>;
      }
    }
  }

  const passwordsMatch = passwordInput !== passwordConfirmationInput;

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Create an Account!</h1>
      <form className="signup-form">
        <div className="username-wrapper">
          <TextField
            required
            id="outlined-required"
            label="Username"
            variant="outlined"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            style={{
              backgroundColor: "white",
              opacity: "90%",
            }}
          />
        </div>
        <div className="password-wrapper">
          <div className="password-box">
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              variant="outlined"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{
                backgroundColor: "white",
                opacity: "90%",
              }}
            />
          </div>
          <div className="password-box">
            <TextField
              required
              id="outlined-required"
              label="Confirm password"
              type="password"
              variant="outlined"
              value={passwordConfirmationInput}
              error={passwordsMatch}
              helperText={passwordsMatch ? "Passwords do not match" : ""}
              onChange={(e) => setPasswordConfirmationInput(e.target.value)}
              style={{
                backgroundColor: "white",
                opacity: "90%",
              }}
            />
          </div>
        </div>
        <div className="submit-btn">
          <Button
            variant="contained"
            onClick={(e) => handleSubmit(e)}
            endIcon={<AccountBoxIcon />}
          >
            Create account
          </Button>
        </div>
        <div className="account-creation-success-error-message">
          {displayResponseMessage()}
        </div>
      </form>
      <div className="login-link">
        <a href="https://world-bank-dashboard.netlify.app/login">
          Already have an account? Login here!
        </a>
      </div>
    </div>
  );
}
