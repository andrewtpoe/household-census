export function setLoginFormDisplay(display = 'signIn') {
  return {
    type: 'SET_LOGIN_FORM_DISPLAY',
    display,
  };
};

export function setLoginFormEmail(email = '') {
  return {
    type: 'SET_LOGIN_FORM_EMAIL',
    email,
  };
};

export function setLoginFormErrors(errors = {}) {
  return {
    type: 'SET_LOGIN_FORM_ERRORS',
    errors,
  };
};

export function setLoginFormPassword(password = '') {
  return {
    type: 'SET_LOGIN_FORM_PASSWORD',
    password,
  };
};

export function setLoginFormConfirmPassword(confirmPassword = '') {
  return {
    type: 'SET_LOGIN_FORM_CONFIRM_PASSWORD',
    confirmPassword,
  };
};
