import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Networking from "../Networking.js";

import "./LoginForm.css";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const networking = new Networking();

  async function handleSubmitClick() {
    await networking.userLoginAttempt(username, password);
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
            // InputLabelProps={{
            //   style: { color: "white" },
            // }}
          />
        </div>
        <div className="login-wrapper">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            // InputLabelProps={{
            //   style: { color: "white" },
            // }}
          />
        </div>
        <div className="login-wrapper">
          <Button variant="contained" onClick={handleSubmitClick}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
