import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Private from './components/routing/Private'
//redux
import {Provider} from 'react-redux'
import store from './Store'

//
import Navbar from './components/Navbar/NavbarIndex';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgotPassword from './components/auth/ForgotPassword'
import Contact from './components/Pages/Contact'
import Dashboard from './components/layouts/AdminDashboard/Navbar'
import Footer from './components/layouts/AdminDashboard/Footer'
import BusinessRegister from './components/Pages/BusinessRegister'
const App = () => {
  return (
    <Provider store={store}>
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
        <Private path='/business' component={BusinessRegister} />
        <Route path ='/contact' component={Contact}/>
      </Switch>
   <Footer/>
    </Router>
    </Provider>
  );
};

export default App;
