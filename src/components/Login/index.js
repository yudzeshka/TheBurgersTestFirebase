import React from "react";
import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";
export default function Login({ currentUser }) {
  return (
    <div className="homePage flex items-center justify-center">
      {currentUser ? <Navigate to="/" /> : <LoginForm />}
    </div>
  );
}
