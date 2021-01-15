import React from 'react'
import './App.css';
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Navbar from './components/layouts/AdminDashboard/Navbar';

import SignIn from './components/auth/SignIn';


const App=()=> {
  return (
<Router>
  <Navbar/>
  <Switch>
  <Route path='/login' exact render={props => <SignIn {...props} />} /> 
  </Switch>


</Router>
  );
}

export default App;
