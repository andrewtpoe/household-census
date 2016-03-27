import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { defaultUserObject } from '../../../test_helper';

import userReducer, {
  initialState,
} from '../../../../app/assets/javascripts/store/reducers/user_reducer';

deepFreeze(initialState);
deepFreeze(defaultUserObject);

describe('user_reducer', () => {

  it('should return initial state when run with no matching action type and no state', () => {
    const action = {
      type: 'TEST_TYPE'
    };
    const result = userReducer(undefined, action)
    expect(result).to.deep.equal(initialState);
  });

  it('"SET_USER" action type should return empty user state if given default action', () => {
    const state = {
      user: defaultUserObject,
    };
    const action = {
      type: 'SET_USER',
      user: {},
    };
    const result = userReducer(state, action);
    expect(result).to.deep.equal({
      user: {},
    });
  });

  it('"SET_USER" action type should return state with user object', () => {
    const action = {
      type: 'SET_USER',
      user: defaultUserObject,
    };
    const result = userReducer(undefined, action);
    expect(result).to.deep.equal({
      user: defaultUserObject,
    });
  });

});
