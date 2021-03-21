import React, { useState, Fragment } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo from '../../assests/abc.jpeg';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ auth: { isAuthenticated, loading,user }, logout }) => {
  const authLinks = (
    <Fragment>
      <NavLink to='/index'>
        {' '}
        <img
          src={logo}
          alt='logo'
          className='logo'
          style={{ height: '80px' }}
        />
      </NavLink>
      <Bars />

      <NavLink to='/index' activeStyle>
        Home
      </NavLink>
      <NavMenu>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/appointment' activeStyle>
          Appointment
        </NavLink>

        <NavLink to='/contactus' activeStyle>
          Contact Us
        </NavLink>
        <NavLink to='/business' activeStyle>
          Business Registration
        </NavLink>
        {/*  <NavLink to='/admin' activeStyle>
            AdminDashboard
          </NavLink>
          {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <a onClick={logout} href='signin'>
          Logout
        </a>
      </NavBtn>
    </Fragment>
  );

  const adminLinks = (
    <Fragment>
      <NavLink to='/index'>
        {' '}
        <img
          src={logo}
          alt='logo'
          className='logo'
          style={{ height: '80px' }}
        />
      </NavLink>
      <Bars />

      <NavLink to='/index' activeStyle>
        Home
      </NavLink>
      <NavMenu>
        <NavLink to='/appointment' activeStyle>
          Appointment
        </NavLink>

      
        <NavLink to='/business' activeStyle>
          Business Registration
        </NavLink>
        {/*  <NavLink to='/admin' activeStyle>
            AdminDashboard
          </NavLink>
          {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <a onClick={logout} href='signin'>
          Logout
        </a>
      </NavBtn>
    </Fragment>
  );





  const guestLinks = (
    <Fragment>
      <NavLink to='/index'>
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
        <NavLink to='/index' activeStyle>
          Home
        </NavLink>
        <NavLink to='/about' activeStyle>
          About
        </NavLink>
        <NavLink to='/signin' activeStyle>
          Appointment
        </NavLink>
        <NavLink to='/map' activeStyle>
          Map
        </NavLink>
        <NavLink to='/contactus' activeStyle>
          Contact Us
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
    </Fragment>
  );

  return (
    <>
      <Nav color='primary'>
        {
          <Fragment>
            
            {isAuthenticated && !loading ? ((user.userRole=='Admin') ? adminLinks:authLinks):guestLinks}
          </Fragment>
        }
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
