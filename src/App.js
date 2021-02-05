import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/NavbarIndex';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword'
import LisiItems from  './components/layouts/AdminDashboard/lisiItems';
import Dashboard from './components/layouts/AdminDashboard/Navbar'
import Footer from './components/layouts/AdminDashboard/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/forgetpassword' component={ForgotPassword} />
        <Route path='/admin' component={Dashboard} />
      </Switch>
   <Footer/>
    </Router>
  );
};

export default App;
