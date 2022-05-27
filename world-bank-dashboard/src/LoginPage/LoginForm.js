import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Networking from "../Networking.js";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./LoginForm.css";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const networking = new Networking();

  function handleSubmitClick() {
    networking.userLoginAttempt(username, password);
  }

  return (
    <div className="main-wrapper">
      <form className="login-user">
        <h1 className="title">Sign in to World Bank</h1>
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
      </form>
    </div>
  );
}
