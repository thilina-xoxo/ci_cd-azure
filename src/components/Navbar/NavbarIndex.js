import React from 'react';
import './Navbar.css';

import logo from '../../assests/abc.jpeg';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav color='primary'>
        <NavLink to='/'>
          {' '}
          <img
            src={logo}
            alt='logo'
            className='logo'
            style={{ height: '80px' }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/appointment' activeStyle>
            Appointment
          </NavLink>
          <NavLink to='/map' activeStyle>
            Map
          </NavLink>
          <NavLink to='/contactus' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/AdminSignin' activeStyle>
            Business Registration
          </NavLink>
          {/*  <NavLink to='/admin' activeStyle>
            AdminDashboard
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
