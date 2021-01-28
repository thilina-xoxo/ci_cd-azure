import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/NavbarIndex';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';

import LisiItems from './components/layouts/AdminDashboard/lisiItems';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/signin' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
