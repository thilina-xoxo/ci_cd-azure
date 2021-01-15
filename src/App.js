import React,{Fragment} from 'react'
import './App.css';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavbarPage from './components/layouts/Navbar';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ForgotPassword from './components/auth/ForgotPassword';


const App=()=> {
  return (

<Router>
<NavbarPage/>
<Switch>
<Route path='/login' exact render={props => <SignIn {...props} />} />
<Route path='/signup' exact render={props => <SignUp {...props} />} />
<Route path='/forgotpassword' exact render={props => <ForgotPassword {...props} />} />
</Switch>
</Router>

  );
}

export default App;
