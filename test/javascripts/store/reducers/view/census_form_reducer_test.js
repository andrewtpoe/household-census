// import { expect } from 'chai';
// import deepFreeze from 'deep-freeze';
//
// import censusFormReducer, {
//   initialState,
// } from '../../../../../app/assets/javascripts/store/reducers/view/census_form_reducer';
//
// deepFreeze(initialState);
//
// describe('census_form_reducer', () => {
//
//   it('should return initial state when run with no matching action type and no state', () => {
//     const action = {
//       type: 'TEST_TYPE'
//     };
//     const result = censusFormReducer(undefined, action)
//     expect(result).to.deep.equal(initialState);
//   });
//
//   it('"SET_CENSUS_FORM_DISPLAY" action type should return state with display value', () => {
//     const action = {
//       type: 'SET_CENSUS_FORM_DISPLAY',
//       display: 'resident',
//     };
//     const result = censusFormReducer(undefined, action);
//     expect(result.display).to.equal('resident');
//   });
//
// });

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import censusFormReducer, {
  initialState,
} from '../../../../../app/assets/javascripts/store/reducers/view/census_form_reducer';

const testState = {
  ...initialState,
  address: '123 not my street',
  city: 'Pleasantville',
  state: 'NC',
  zipCode: '28223',
  numberOfBedrooms: 3,
};

deepFreeze(initialState);
deepFreeze(testState);

describe('census_form_reducer', () => {

  it('should return initial state when run with no matching action type and no state', () => {
    const action = {
      type: 'TEST_TYPE',
      testObj: 'test_value',
    };
    const result = censusFormReducer(undefined, action);
    expect(result).to.deep.equal(initialState);
  });

  it('should return equal state when run with no matching action type and state', () => {
    const action = {
      type: 'TEST_TYPE',
      testObj: 'test_value',
    };
    const result = censusFormReducer(testState, action);
    expect(result).to.deep.equal(testState);
  });

  it('"SET_CENSUS_FORM_VALUES" should return the same state if called with no value', () => {
    const action = {
      type: 'SET_CENSUS_FORM_VALUES',
    };
    const result = censusFormReducer(testState, action);
    expect(result).to.deep.equal(testState);
  });

  it('"SET_CENSUS_FORM_VALUES" should return state with an updated value if given a valid value', () => {
    const values = [
      {
        display: 'house',
      },
      {
        address: '',
      },
      {
        city: '',
      },
      {
        state: '',
      },
      {
        zipCode: '',
      },
      {
        numberOfBedrooms: undefined,
      },
      {
        display: 'resident',
      },
      {
        address: '123 test street',
      },
      {
        city: 'test city',
      },
      {
        state: 'test state',
      },
      {
        zipCode: '33993',
      },
      {
        numberOfBedrooms: undefined,
      },
    ];
    values.forEach((value) => {
      const keys = Object.keys(value);
      const action = {
        type: 'SET_CENSUS_FORM_VALUES',
        [keys[0]]: value[keys[0]],
      };
      const result = censusFormReducer(initialState, action);
      expect(result[keys[0]]).to.deep.equal(value[keys[0]]);
    });
  });

  it('"SET_CENSUS_FORM_VALUES" should be able to handle multiple valid updates at once', () => {
    const updates = {
      email: 'test value',
      password: 'password',
      confirmPassword: 'password',
    };
    const action = {
      type: 'SET_CENSUS_FORM_VALUES',
      ...updates,
    };
    const result = censusFormReducer(initialState, action);
    const keys = Object.keys(updates);
    keys.forEach((key) => {
      expect(result[key]).to.equal(updates[key]);
    });
  });

  it('"SET_CENSUS_FORM_VALUES_TO_DEFAULT" should set the state to the same values as the initial state', () => {
    const action = {
      type: 'SET_CENSUS_FORM_VALUES_TO_DEFAULT',
    };
    const result = censusFormReducer(testState, action);
    expect(result).to.deep.equal({
      ...initialState,
    });
  });

});
