import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Search } from './Pages/Search';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/search' component={ Search } />
      <Route path='/login' component={ Login } />
    </Switch>
  );
};

export default App;
