export const initialState = {
  display: 'signIn',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN_FORM_DISPLAY':
      return Object.assign({}, state, {
        display: action.display,
      });
    case 'SET_LOGIN_FORM_EMAIL':
      return Object.assign({}, state, {
        email: action.email,
      });
    case 'SET_LOGIN_FORM_ERRORS':
      return Object.assign({}, state, {
        errors: action.errors,
      });
    case 'SET_LOGIN_FORM_PASSWORD':
      return Object.assign({}, state, {
        password: action.password,
      });
    case 'SET_LOGIN_FORM_CONFIRM_PASSWORD':
      return Object.assign({}, state, {
        confirmPassword: action.confirmPassword,
      });
    default:
      return state;
  }
}
