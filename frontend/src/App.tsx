import React from "react";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Search } from "./Pages/Search";

import { Switch, Route } from "react-router";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;
