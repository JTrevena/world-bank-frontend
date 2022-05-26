import React, { useState } from "react";
import "./Signup.css";
import Networking from "../Networking.js";
import { Button, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    setAccountCreationAttempts(accountCreationAttempts + 1);
    if (passwordInput === passwordConfirmationInput) {
      const response = await networking.createAccount(
        usernameInput,
        passwordInput
      );
      response.error
        ? setAccountCreationSuccess(false)
        : setAccountCreationSuccess(true);
    }
  }

  function displayResponseMessage() {
    console.log(accountCreationSuccess);
    if (accountCreationAttempts > 0) {
      if (!accountCreationSuccess) {
        return <Alert severity="error">Account could not be created</Alert>;
      } else {
        setTimeout(() => navigate("/login"), 500);
        return <Alert severity="success">Account created</Alert>;
      }
    }
  }

  return (
    <div className="page-wrapper">
      <h1>Create an account!</h1>
      <form className="signup-form">
        <div className="username-wrapper">
          <TextField
            required
            id="outlined-required"
            label="username"
            variant="outlined"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </div>
        <div className="password-wrapper">
          <div className="password-box">
            <TextField
              required
              id="outlined-required"
              label="password"
              type="password"
              variant="outlined"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className="password-box">
            <TextField
              required
              id="outlined-required"
              label="confirm password"
              type="password"
              variant="outlined"
              value={passwordConfirmationInput}
              onChange={(e) => setPasswordConfirmationInput(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-btn">
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Create account
          </Button>
        </div>
        <div className="account-creation-success-error-message">
          {displayResponseMessage()}
        </div>
      </form>
    </div>
  );
}
