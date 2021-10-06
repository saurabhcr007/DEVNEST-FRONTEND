import "./App.css";
import Bootstrap from "./Components/Bootstrap";
import Tailwind from "./Components/Tailwind";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Bootstrap />
        </Route>
        <Route exact path="/tailwind">
          <Tailwind />
        </Route>
      </Switch>
    </Router>
  );
}
