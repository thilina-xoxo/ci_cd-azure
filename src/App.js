import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Routes
import Private from './components/routing/Private';
import Admin from './components/routing/Admin'
import Business from './components/routing/Business'
//redux
import { Provider } from 'react-redux';
import store from './Store';
import Alert from './components/layouts/AdminDashboard/Alert';


//
import Navbar from './components/Navbar/NavbarIndex';
import Home from './components/Pages/Home';
import About from './components/Pages/UserPages/About'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import AppointmentMaking from './components/Pages/UserPages/AppointmentMaking';
import TreatmentMaking from './components/Pages/BusinessPage/TreatmentMaking';
import ForgotPassword from './components/auth/ForgotPassword';
import Contact from './components/Pages/UserPages/Contact';
import Services from './components/Pages/UserPages/Services';
import AdminSignin from './components/layouts/AdminDashboard/AdminSignin';
import Dashboard from './components/layouts/AdminDashboard/Navbar';
import Footer from './components/layouts/AdminDashboard/Footer';
import BusinessRegister from './components/Pages/BusinessPage/BusinessRegister';
import setAuthToken from './utils/setAuthtoken';
import Map from './components/layouts/AdminDashboard/maphome/Map';
import Proffile from './components/Pages/BusinessPage/Proffile';
import {loadUser} from './actions/auth'
import Allusers from './components/Pages/AdminPages/Showallusers'
import EditProfile from './components/Pages/BusinessPage/EditProfile'
import Appointments from './components/Pages/AdminPages/Appointments';
import BusinessComponet from './components/Pages/BusinessPage/BusinessComponet';
import BusinessDashboard from './components/Pages/BusinessPage/BusinessDashboarad'
import AppointmentById from './components/Pages/BusinessPage/Appointments/AppointmentById';
import TreatmentById from './components/Pages/BusinessPage/TreatmentById';
import Privilage from './components/Pages/error/Privilage'
if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {

  useEffect(()=>{
    store.dispatch(loadUser())
  }, []) 

  return (
    <Provider store={store}>
      <Router>

      <Route exact render={props=> <Navbar {...props}/>}/>
        <Alert />
        <Switch>
          <Route path='/index' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Private exact path='/appointmentmaking/:businessId' component={AppointmentMaking} />
          <Private exact path='/treatmentmaking/:businessId' component={TreatmentMaking} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <Route path='/contactus' component={Contact} />
          <Business exact path='/business/register' component={BusinessRegister} />
          <Route exact path='/businessproffile/:businessId' component={Proffile} />
          <Route path='/businesses' component={BusinessComponet} />
          <Route exact path='/appoint/:businessId' component={AppointmentById} />
          <Route exact path='/treatment/:businessId' component={TreatmentById} />
          <Route path='/appointments' component={Appointments} />
          <Admin exact path='/allusers' component={Allusers} />
          <Route path='/map' component={Map} />
           <Route exact path='/editProfile/:businessId' component={EditProfile} />
           <Route path='/editProfile/:businessId' component={EditProfile} />
           <Route component={Privilage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;