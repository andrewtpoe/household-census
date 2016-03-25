import React, { Component, PropTypes } from 'react';

import LoginPage from '../components/pages/login';

class LoginPageContainer extends Component {

  render() {
    const props = this.props;
    return (
      <LoginPage { ...props }/>
    );
  }

}

export default LoginPageContainer;
