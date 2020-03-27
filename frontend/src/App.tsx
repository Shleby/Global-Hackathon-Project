import React from "react";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Switch, Route } from "react-router";


const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;
