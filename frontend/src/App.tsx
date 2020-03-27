import React from "react";
import { Home } from "./Pages/Home";
import { Search } from "./Pages/Search";
import "./App.css";
import { Switch, Route } from "react-router";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default App;
