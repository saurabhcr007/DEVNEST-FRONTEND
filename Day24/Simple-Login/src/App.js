import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout"
}

function reducer(auth, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...auth, value: !auth.value }

    case ACTIONS.LOGOUT:
      return { ...auth, value: !auth.value }

    default:
      return auth
  }
}
export default function App() {
  const [auth, dispatch] = useReducer(reducer, { value: false })
  return (

    <Router>
      <Navbar auth={auth} />
      <Switch>
        <Route exact path="/">
          <Home auth={auth} dispatch={dispatch} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <Profile auth={auth} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard auth={auth} />
        </Route>

      </Switch>
    </Router>

  );
}
