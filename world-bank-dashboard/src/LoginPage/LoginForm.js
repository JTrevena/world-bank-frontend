import React from "react";
import { Button, TextField } from "@mui/material";

import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="main-wrapper">
      <form id="login-user">
        <div className="login-wrapper">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        </div>
        <div className="login-wrapper">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        </div>
        <div className="login-wrapper">
          <Button variant="contained">Submit</Button>
        </div>
      </form>
    </div>
  );
}
