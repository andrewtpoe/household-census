import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import censusFormReducer, {
  initialState,
} from '../../../../../app/assets/javascripts/store/reducers/view/census_form_reducer';

deepFreeze(initialState);

describe('census_form_reducer', () => {

  it('should return initial state when run with no matching action type and no state', () => {
    const action = {
      type: 'TEST_TYPE'
    };
    const result = censusFormReducer(undefined, action)
    expect(result).to.deep.equal(initialState);
  });

  it('"SET_CENSUS_FORM_DISPLAY" action type should return state with display value', () => {
    const action = {
      type: 'SET_CENSUS_FORM_DISPLAY',
      display: 'resident',
    };
    const result = censusFormReducer(undefined, action);
    expect(result.display).to.equal('resident');
  });

});
