import { expect } from 'chai';

import {
  setLoginFormValues,
  setLoginFormValuesToDefault,
} from '../../../../app/assets/javascripts/actions/view/login_form_actions';

describe('login_form_actions', () => {

  it('set login form values should return no update values if not given a value', () => {
    const setLoginFormAction = setLoginFormValues();
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_VALUES',
    });
  });

  it('set login form values should return value with same value as provided object with valid keys.', () => {
    const values = [
      {
        display: 'signIn'
      },
      {
        email: '',
      },
      {
        password: '',
      },
      {
        confirmPassword: '',
      },
      {
        errors: []
      },
      {
        display: 'signOut',
      },
      {
        email: 'test_email@gmail.com',
      },
      {
        password: 'test_password',
      },
      {
        confirmPassword: 'test_password',
      },
    ];
    values.forEach((value) => {
      const setLoginFormAction = setLoginFormValues(value);
      expect(setLoginFormAction).to.deep.equal({
        type: 'SET_LOGIN_FORM_VALUES',
        ...value,
      });
    })
  });

  it('set login form values can handle multiple update values at once', () => {
    const updates = {
      email: 'test value',
      password: 'password',
      confirmPassword: 'password',
    };
    const setLoginFormAction = setLoginFormValues(updates);
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_VALUES',
      ...updates,
    });
    expect(setLoginFormAction).to.include.keys('email');
    expect(setLoginFormAction).to.include.keys('password');
    expect(setLoginFormAction).to.include.keys('confirmPassword');
  });

  it('set login form values to default returns an empty action with just a type', () => {
    const setLoginFormAction = setLoginFormValuesToDefault();
    expect(setLoginFormAction).to.deep.equal({
      type: 'SET_LOGIN_FORM_VALUES_TO_DEFAULT',
    });
  });
  
});
