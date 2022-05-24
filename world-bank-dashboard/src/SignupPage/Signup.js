import React from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Signup(props) {
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
            />
          </div>
          <div className="password-box">
            <TextField
              required
              id="outlined-required"
              label="confirm password"
              type="password"
              variant="outlined"
            />
          </div>
        </div>
        <div className="submit-btn">
          <LoadingButton
            size="small"
            loadingIndicator="Create account"
            variant="outlined"
          >
            Create account
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
