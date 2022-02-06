import React from "react";
import { Navigate } from "react-router-dom";

import SignUpForm from "./SignUpForm";

export default function SignUp({ currentUser }) {
  return (
    <div className="homePage flex items-center justify-center">
      {currentUser ? <Navigate to="/" /> : <SignUpForm />}
    </div>
  );
}
