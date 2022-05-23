import React from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";

export default function Signup(props) {
  return (
    <div>
      <h1>Create an account!</h1>
      <form>
        <div className="username-wrapper">
          <TextField
            required
            id="outlined-required"
            label="username"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="password"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="confirm password"
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
}
