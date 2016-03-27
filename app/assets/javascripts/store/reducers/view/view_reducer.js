import { combineReducers } from 'redux';

import loginForm from './login_form_reducer';

const viewReducer = combineReducers({
  loginForm,
});

export default viewReducer;
