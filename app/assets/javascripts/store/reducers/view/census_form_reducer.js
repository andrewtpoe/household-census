export const initialState = {
  display: 'house',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_CENSUS_FORM_DISPLAY':
      return Object.assign({}, state, {
        display: action.display,
      });
    default:
      return state;
  }
}
