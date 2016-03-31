import { expect } from 'chai';

import {
  setCensusFormDisplay,
} from '../../../../app/assets/javascripts/actions/view/census_form_actions';

describe('census_form_actions', () => {

  it('set census form display should return display: "house" if not given a  value', () => {
    const setCensusFormAction = setCensusFormDisplay();
    expect(setCensusFormAction).to.deep.equal({
      type: 'SET_CENSUS_FORM_DISPLAY',
      display: 'house',
    });
  });

  it('set census form display should return an action with correct display value', () => {
    const setCensusFormAction = setCensusFormDisplay('resident');
    expect(setCensusFormAction).to.deep.equal({
      type: 'SET_CENSUS_FORM_DISPLAY',
      display: 'resident',
    });
  });

});
