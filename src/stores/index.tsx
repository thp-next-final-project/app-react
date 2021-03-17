import { createStore } from 'redux';
import Cookies from 'js-cookie';
import { COOKIE_NAME } from '../config/config';
import { LOGIN, LOGOUT, GET_USER } from './actions'
import { CurrentUser, Payload } from '../types/models';



const initialUserData:CurrentUser = {
  id: null,
  email: null,
  firstname: null,
  lastname: null,
  role: null,
  isLogged: false
}

const userReducer = (state = initialUserData, payload:Payload):CurrentUser => {
  const { type, data, token } = payload;

  switch (type) {
    case GET_USER:
      if (!data || !data.id) {
        throw new Error('Data for login must not be empty.');
      }
      return {
        id: parseInt(data.id),
        role: data.attributes.role,
        firstname: data.attributes.firstname,
        lastname: data.attributes.lastname,
        email: data.attributes.email,
        isLogged: true
      }
    case LOGIN:
      if (!data || !data.id) {
        throw new Error('Data for login must not be empty.');
      }
      if (!token) {
        throw new Error('Missing token.');
      }
      Cookies.set(COOKIE_NAME, token);
      return {
        id: parseInt(data.id),
        role: data.attributes.role,
        firstname: data.attributes.firstname,
        lastname: data.attributes.lastname,
        email: data.attributes.email,
        isLogged: true
      };
    case LOGOUT:
      Cookies.remove(COOKIE_NAME);
      return {
        id: null,
        role: null,
        firstname: null,
        lastname: null,
        email: null,
        isLogged: false
      };
    default:
      return state;
  }
}

export default createStore(userReducer);