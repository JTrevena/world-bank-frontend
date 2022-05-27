import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div>
      <LoginForm />
      <div>
        <a href="https://world-bank-dashboard.netlify.app/sign-up">Don't have an account yet? Sign up here!</a>
      </div>
    </div>
  );
}
