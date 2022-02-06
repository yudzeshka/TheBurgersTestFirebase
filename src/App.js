import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Burgers from "./components/Pages/Burgers";
import Home from "./components/Pages/Home";
import Breakfasts from "./components/Pages/Breakfasts";
import Drinks from "./components/Pages/Drinks";
import Cart from "./components/Pages/Cart";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { auth } from "../src/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Orders from "./components/Pages/Orders";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
  }, []);
  console.log(currentUser);

  // const API = process.env.REACT_APP_MOKAPI_KEY;
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" exact element={<Home currentUser={currentUser} />} />
          <Route path="/login" element={<Login currentUser={currentUser} />} />
          <Route
            path="/sign-up"
            element={<SignUp currentUser={currentUser} />}
          />
          <Route path="/burgers" exact element={<Burgers API={API} />} />
          <Route path="/breakfasts" exact element={<Breakfasts API={API} />} />
          <Route path="/drinks" exact element={<Drinks API={API} />} />
          <Route
            path="/cart"
            exact
            element={<Cart currentUser={currentUser} />}
          />
          <Route
            path="/orders"
            exact
            element={<Orders currentUser={currentUser} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
