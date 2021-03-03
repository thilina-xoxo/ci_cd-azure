import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'

const Private = ({ component: Component,
    auth:{loading, isAuthenticted},
     ...rest 
    }) => (
    <Route 
    {...rest}   
    render={props =>
        !isAuthenticted && loading ?
        (<Redirect to='/signin'/>
        ):(
        <Component {...props}/>)
    } 
        /> );

        Private.propTypes={      
           auth:PropTypes.object.isRequired,
          }
          
          const mapStateToProps=state=>({
            auth:state.auth
          })

  export default connect(mapStateToProps)(Private);