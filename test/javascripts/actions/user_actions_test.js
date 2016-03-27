import { expect } from 'chai';
import { defaultUserObject } from '../../test_helper';

import {
  setUser,
} from '../../../app/assets/javascripts/actions/user_actions';

describe('user_actions', () => {

  it('set user should return an empty action if not given a user object', () => {
    const setUserAction = setUser();
    expect(setUserAction).to.deep.equal({
      type: 'SET_USER',
      user: {},
    });
  });

  it('set user should return an action with user if given a user object', () => {
    const setUserAction = setUser(defaultUserObject);
    expect(setUserAction).to.deep.equal({
      type: 'SET_USER',
      user: defaultUserObject,
    });
  });

});
