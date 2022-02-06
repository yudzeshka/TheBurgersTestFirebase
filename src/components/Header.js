import { updateCurrentUser } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Header() {
  return (
    <div className="header sticky top-0 z-10">
      <nav className="flex items-center list-none">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/burgers"}>
          <li>BURGERS</li>
        </Link>
        <Link to={"/breakfasts"}>
          <li>BREAKFASTS</li>
        </Link>
        <Link to={"/drinks"}>
          <li>DRINKS</li>
        </Link>
      </nav>

      <div className="flex items-center ml-4">
        {auth.currentUser && (
          <Link to={"/orders"} className="mr-4">
            {auth.currentUser.displayName}
          </Link>
        )}
        <Link to={"/cart"}>
          <div className="img"></div>
        </Link>
      </div>
    </div>
  );
}
