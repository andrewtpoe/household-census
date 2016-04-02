import { expect } from 'chai';

import {
  setCensusFormValues,
  setCensusFormValuesToDefault,
} from '../../../../app/assets/javascripts/actions/view/census_form_actions';

describe('census_form_actions', () => {

  it('set census form values should return no update values if not given a value', () => {
    const setCensusFormAction = setCensusFormValues();
    expect(setCensusFormAction).to.deep.equal({
      type: 'SET_CENSUS_FORM_VALUES',
    });
  });

  it('set census form values should return value with same value as provided object with valid keys.', () => {
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
      const setCensusFormAction = setCensusFormValues(value);
      expect(setCensusFormAction).to.deep.equal({
        type: 'SET_CENSUS_FORM_VALUES',
        ...value,
      });
    })
  });

  it('set census form values can handle multiple update values at once', () => {
    const updates = {
      address: 'test street address',
      city: 'test city',
      state: 'test state',
    };
    const setCensusFormAction = setCensusFormValues(updates);
    expect(setCensusFormAction).to.deep.equal({
      type: 'SET_CENSUS_FORM_VALUES',
      ...updates,
    });
    expect(setCensusFormAction).to.include.keys('address');
    expect(setCensusFormAction).to.include.keys('city');
    expect(setCensusFormAction).to.include.keys('state');
  });

  it('set census form values to default returns an empty action with just a type', () => {
    const setCensusFormAction = setCensusFormValuesToDefault();
    expect(setCensusFormAction).to.deep.equal({
      type: 'SET_CENSUS_FORM_VALUES_TO_DEFAULT',
    });
  });

});
