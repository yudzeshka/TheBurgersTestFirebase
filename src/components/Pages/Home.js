import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
export default function Home({ currentUser }) {
  return (
    <div className="homePage">
      <Header currentUser={currentUser} />
      <div className="content">
        <div className="textWrapper">
          <h1>The Burgers</h1>
          <h3>Handcrafted since 1968</h3>
        </div>
        {currentUser ? (
          <button
            className="button border border-white py-2 px-4 m-2"
            onClick={() => signOut(auth)}
          >
            Log out
          </button>
        ) : (
          <div className="buttonsWrapper">
            <Link
              className="button border border-white py-2 px-3 m-2"
              to={"/login"}
            >
              LOG IN
            </Link>
            <Link
              className="button border border-white py-2 px-4 m-2"
              to={"/sign-up"}
            >
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
