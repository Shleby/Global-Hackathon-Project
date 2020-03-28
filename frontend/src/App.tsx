import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './Pages/Home';
import Login from './Pages/Login';
import Search from './Pages/Search';
import SignUp from './Pages/SignUp';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/search' component={ Search } />
      <Route path='/login' component={ Login } />
      <Route path='/signup' component={ SignUp } />
    </Switch>
  );
};

export default App;
