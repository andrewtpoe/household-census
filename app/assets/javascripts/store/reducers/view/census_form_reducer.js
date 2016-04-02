export const initialState = {
  display: 'house',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  numberOfBedrooms: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_CENSUS_FORM_VALUES':
      const updates = {};
      const keys = Object.keys(action)
        .map(k => k !== 'type' ? k : undefined)
        .filter(k => k);
      let i;
      for (i = 0; i < keys.length; i++) {
        updates[keys[i]] = (action[keys[i]] ? action[keys[i]] : initialState[keys[i]]);
      }
      return {
        ...state,
        ...updates,
      };
    case 'SET_CENSUS_FORM_VALUES_TO_DEFAULT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
