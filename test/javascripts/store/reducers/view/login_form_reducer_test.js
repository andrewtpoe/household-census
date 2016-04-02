import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import loginFormReducer, {
  initialState,
} from '../../../../../app/assets/javascripts/store/reducers/view/login_form_reducer';

const testState = {
  ...initialState,
  email: 'test_email@gmail.com',
  password: 'test_password',
  confirmPassword: 'test_password',
};

deepFreeze(initialState);
deepFreeze(testState);

describe('login_form_reducer', () => {

  it('should return initial state when run with no matching action type and no state', () => {
    const action = {
      type: 'TEST_TYPE',
      testObj: 'test_value',
    };
    const result = loginFormReducer(undefined, action);
    expect(result).to.deep.equal(initialState);
  });

  it('should return equal state when run with no matching action type and state', () => {
    const action = {
      type: 'TEST_TYPE',
      testObj: 'test_value',
    };
    const result = loginFormReducer(testState, action);
    expect(result).to.deep.equal(testState);
  });

  it('"SET_LOGIN_FORM_VALUES" should return the same state if called with no value', () => {
    const action = {
      type: 'SET_LOGIN_FORM_VALUES',
    };
    const result = loginFormReducer(testState, action);
    expect(result).to.deep.equal(testState);
  });

  it('"SET_LOGIN_FORM_VALUES" should return state with an updated value if given a valid value', () => {
    const values = [
      {
        display: 'signOut'
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
        email: 'test_email@gmail.com',
      },
      {
        password: 'test_password',
      },
      {
        confirmPassword: 'test_password',
      },
      {
        errors: ['test_value'],
      },
    ];
    values.forEach((value) => {
      const keys = Object.keys(value);
      const action = {
        type: 'SET_LOGIN_FORM_VALUES',
        [keys[0]]: value[keys[0]],
      };
      const result = loginFormReducer(initialState, action);
      expect(result[keys[0]]).to.deep.equal(value[keys[0]]);
    });
  });

  it('"SET_LOGIN_FORM_VALUES" should be able to handle multiple valid updates at once', () => {
    const updates = {
      email: 'test value',
      password: 'password',
      confirmPassword: 'password',
    };
    const action = {
      type: 'SET_LOGIN_FORM_VALUES',
      ...updates,
    };
    const result = loginFormReducer(initialState, action);
    const keys = Object.keys(updates);
    keys.forEach((key) => {
      expect(result[key]).to.equal(updates[key]);
    });
  });

  it('"SET_LOGIN_FORM_VALUES_TO_DEFAULT" should set the state to the same values as the initial state', () => {
    const action = {
      type: 'SET_LOGIN_FORM_VALUES_TO_DEFAULT',
    };
    const result = loginFormReducer(testState, action);
    expect(result).to.deep.equal({
      ...initialState,
    });
  });

});
