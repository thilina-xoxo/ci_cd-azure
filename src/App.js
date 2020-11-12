import React,{Fragment} from 'react'
import './App.css';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import NavbarPage from './components/layouts/Navbar';




const App=()=> {
  return (


<Router>
<NavbarPage/>

</Router>




  );
}

export default App;
