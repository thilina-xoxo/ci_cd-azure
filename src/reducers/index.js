import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile'
import users from './users'

export default combineReducers({
  alert,
  auth,
  profile,
  users
});
