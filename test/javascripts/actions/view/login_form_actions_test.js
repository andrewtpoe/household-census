import { expect } from 'chai';

import {
  setLoginFormDisplay,
  setLoginFormEmail,
  setLoginFormPassword,
  setLoginFormConfirmPassword,
} from '../../../../app/assets/javascripts/actions/view/login_form_actions';

describe('login_form_actions', () => {

  it('set login form display should return display: "signIn" if not given a  value', () => {
    const setLoginFormAction = setLoginFormDisplay();
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_DISPLAY',
      display: 'signIn',
    });
  });

  it('set login form display should return an action with correct display value', () => {
    const setLoginFormAction = setLoginFormDisplay('signIn');
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_DISPLAY',
      display: 'signIn',
    });
  });

  it('set login form display should return an action with correct display value', () => {
    const setLoginFormAction = setLoginFormDisplay('signUp');
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_DISPLAY',
      display: 'signUp',
    });
  });

  it('set login form display should return an action with correct display value', () => {
    const setLoginFormAction = setLoginFormDisplay('signOut');
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_DISPLAY',
      display: 'signOut',
    });
  });

  it('set login form email should return email: "" if not given a value', () => {
    const setLoginFormAction = setLoginFormEmail();
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_EMAIL',
      email: '',
    });
  });

  it('set login form email should return an action with correct email value', () => {
    const setLoginFormAction = setLoginFormEmail('test_email@gmail.com');
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_EMAIL',
      email: 'test_email@gmail.com',
    });
  });

  it('set login form password should return password: "" if not given a value', () => {
    const setLoginFormAction = setLoginFormPassword();
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_PASSWORD',
      password: '',
    });
  });

  it('set login form password should return an action with correct password value', () => {
    const setLoginFormAction = setLoginFormPassword('password');
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_PASSWORD',
      password: 'password',
    });
  });

  it('set login form confirm password should return confirmPassword: "" if not given a value', () => {
    const setLoginFormAction = setLoginFormConfirmPassword();
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_CONFIRM_PASSWORD',
      confirmPassword: '',
    });
  });

  it('set login form confirm password should return an action with correct confirmPassword value', () => {
    const setLoginFormAction = setLoginFormConfirmPassword('password');
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_CONFIRM_PASSWORD',
      confirmPassword: 'password',
    });
  });

});
