import React from "react";
import logo from "./logo.svg";
import { Home } from "./Pages/Home";
import "./App.css";
import { Switch, Route } from "react-router";
const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
