import React,{Fragment} from 'react'
import './App.css';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import NavbarPage from './components/layouts/Navbar';
import SignInSide from './components/auth/login'


const App=()=> {
  return (


<Router>
<NavbarPage/>
<SignInSide/>
</Router>




  );
}

export default App;
