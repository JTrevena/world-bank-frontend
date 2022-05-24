import React, { useState } from "react";
import "./Signup.css";
import Networking from "../Networking.js";
import { Button, TextField } from "@mui/material";

export default function Signup(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmationInput, setPasswordConfirmationInput] =
    useState("");

  const networking = new Networking();

  function handleSubmit(e) {
    if (passwordInput === passwordConfirmationInput) {
      networking.createAccount(usernameInput, passwordInput); // function in Networking not complete yet
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
          <Button variant="contained" onSubmit={(e) => handleSubmit(e)}>
            Create account
          </Button>
        </div>
      </form>
    </div>
  );
}
