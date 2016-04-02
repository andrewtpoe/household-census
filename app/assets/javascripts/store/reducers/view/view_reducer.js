import { combineReducers } from 'redux';

import censusForm from './census_form_reducer';
import loginForm from './login_form_reducer';

const viewReducer = combineReducers({
  censusForm,
  loginForm,
});

export default viewReducer;
