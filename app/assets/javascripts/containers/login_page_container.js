import React, { Component, PropTypes } from 'react';

import {
  getRequest,
  postRequest,
} from '../ajax';

import LoginPage from '../components/pages/login_page';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setLoginFormDisplay,
  setLoginFormEmail,
  setLoginFormErrors,
  setLoginFormPassword,
  setLoginFormConfirmPassword,
} from '../actions/view/login_form_actions';
import {
  setUser
} from '../actions/user_actions';

function mapStateToProps(state) {
  return {
    user: state.user.user,
    loginForm: state.view.loginForm,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setLoginFormDisplay,
      setLoginFormEmail,
      setLoginFormErrors,
      setLoginFormPassword,
      setLoginFormConfirmPassword,
      setUser,
    }, dispatch),
  };
};

class LoginPageContainer extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      setLoginFormDisplay: PropTypes.func.isRequired,
      setLoginFormEmail: PropTypes.func.isRequired,
      setLoginFormErrors: PropTypes.func.isRequired,
      setLoginFormPassword: PropTypes.func.isRequired,
      setLoginFormConfirmPassword: PropTypes.func.isRequired,
      setUser: PropTypes.func.isRequired,
    }),
    user: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  async componentDidMount() {
    const {
      actions: {
        setLoginFormDisplay,
        setUser,
      },
      user,
    } = this.props;
    if (!user || !user.current_sign_in_at) {
      const url = 'api/v1/user';
      const response = await getRequest(url);
      if (response.ok) {
        setUser(response.body);
        setLoginFormDisplay('signOut');
      }
    }
  }

  _clearInputs = () => {
    this.props.actions.setLoginFormEmail();
    this.props.actions.setLoginFormPassword();
    this.props.actions.setLoginFormConfirmPassword();
    this.props.actions.setLoginFormErrors();
  }

  _handleConfirmPasswordChange = (value) => {
    this.props.actions.setLoginFormConfirmPassword(value);
  }

  _handleEmailChange = (value) => {
    this.props.actions.setLoginFormEmail(value);
  }

  _handlePasswordChange = (value) => {
    this.props.actions.setLoginFormPassword(value);
  }

  _handleSignIn = async () => {
    const {
      actions: {
        setUser,
        setLoginFormErrors,
      },
      loginForm: {
        email,
        password,
      },
    } = this.props;
    const url = '/api/v1/user/session';
    const data = {
      user: {
        email,
        password,
      }
    };
    const response = await postRequest(url, data);
    if (response.ok) {
      setUser(response.body);
      this._clearInputs();
      this.context.router.push('/');
    } else {
      setUser();
      setLoginFormErrors(response.body.errors);
    };
  }

  _handleSignUp = async () => {
    const {
      actions: {
        setUser,
        setLoginFormErrors,
      },
      loginForm: {
        email,
        password,
        confirmPassword,
      },
    } = this.props;
    const data = {
      user: {
        email,
        password,
        password_confirmation: confirmPassword,
      }
    };
    let errors = [];
    if (password === confirmPassword) {
      const url = '/api/v1/user/registration'
      const response = await postRequest(url, data);
      if (response.ok) {
        setUser(response.body);
        this._clearInputs();
        this.context.router.push('/');
      } else {
        errors = response.body.errors;
      }
    } else {
      errors = {
        login: ['Passwords do not match'],
      };
    }
    setUser();
    setLoginFormErrors(errors);
  }

  _onActionButtonClicked = () => {
    const {
      _handleSignOut,
      loginForm: {
        display,
      },
    } = this.props;
    if (display === 'signIn') {
      this._handleSignIn();
    } else if (display === 'signOut') {
      _handleSignOut();
    } else if (display === 'signUp') {
      this._handleSignUp();
    };
  }

  _onDisplayChangeClicked = (value) => {
    this.props.actions.setLoginFormDisplay(value);
  }

  render() {
    const props = this.props;
    // console.log('*** LoginPageContainer props ***');
    // console.log(props);
    return (
      <LoginPage
        { ...props }
        _handleConfirmPasswordChange={this._handleConfirmPasswordChange}
        _handleEmailChange={this._handleEmailChange}
        _handlePasswordChange={this._handlePasswordChange}
        _onActionButtonClicked={this._onActionButtonClicked}
        _onDisplayChangeClicked={this._onDisplayChangeClicked}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
