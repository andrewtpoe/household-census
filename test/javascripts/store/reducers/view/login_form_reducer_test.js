import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import loginFormReducer, {
  initialState,
} from '../../../../../app/assets/javascripts/store/reducers/view/login_form_reducer';

deepFreeze(initialState);

describe('login_form_reducer', () => {

  it('should return initial state when run with no matching action type and no state', () => {
    const action = {
      type: 'TEST_TYPE'
    };
    const result = loginFormReducer(undefined, action)
    expect(result).to.deep.equal(initialState);
  });

  it('"SET_LOGIN_FORM_DISPLAY" action type should return state with display value', () => {
    const action = {
      type: 'SET_LOGIN_FORM_DISPLAY',
      display: 'signOut',
    };
    const result = loginFormReducer(undefined, action);
    expect(result.display).to.equal('signOut');
  });

  it('"SET_LOGIN_FORM_EMAIL" action type should return state with email value', () => {
    const action = {
      type: 'SET_LOGIN_FORM_EMAIL',
      email: 'test_email@gmail.com',
    };
    const result = loginFormReducer(undefined, action);
    expect(result.email).to.equal('test_email@gmail.com');
  });

  it('"SET_LOGIN_FORM_ERRORS" action type should return state with errors value', () => {
    const action = {
      type: 'SET_LOGIN_FORM_ERRORS',
      errors: {
        testErrors: ['test error'],
      },
    };
    const result = loginFormReducer(undefined, action);
    expect(result.errors).to.deep.equal({
      testErrors: ['test error'],
    });
  });

  it('"SET_LOGIN_FORM_PASSWORD" action type should return state with password value', () => {
    const action = {
      type: 'SET_LOGIN_FORM_PASSWORD',
      password: 'password',
    };
    const result = loginFormReducer(undefined, action);
    expect(result.password).to.equal('password');
  });

  it('"SET_LOGIN_FORM_CONFIRM_PASSWORD" action type should return state with confirmPassword value', () => {
    const action = {
      type: 'SET_LOGIN_FORM_CONFIRM_PASSWORD',
      confirmPassword: 'password',
    };
    const result = loginFormReducer(undefined, action);
    expect(result.confirmPassword).to.equal('password');
  });

});
