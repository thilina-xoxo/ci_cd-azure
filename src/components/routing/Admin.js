import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../layouts/Spinner';

const Admin = ({ component: Component,
    auth:{loading, isAuthenticated,user},
     ...rest 
    }) => (
    <Route 
    {...rest}   
    render={props =>
      loading ? (
        <Spinner />
      ) : isAuthenticated ? (

        (user.userRole=='Admin')?

        <Component {...props} />:( <Redirect to="/index" />)
      ) : (
        <Redirect to="/signin" />
      )
    }
        /> );

        Admin.propTypes={      
           auth:PropTypes.object.isRequired,
          }
          
          const mapStateToProps=state=>({
            auth:state.auth
          })

  export default connect(mapStateToProps)(Admin);