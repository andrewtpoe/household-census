import React, { Component, PropTypes } from 'react';

import {
  postRequest,
  deleteRequest
} from '../ajax';

import LoginPage from '../components/pages/login_page';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setLoginFormDisplay,
  setLoginFormEmail,
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
      setLoginFormPassword,
      setLoginFormConfirmPassword,
      setUser,
    }, dispatch),
  };
};

class LoginPageContainer extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this._clearInputs = this._clearInputs.bind(this);
    this._handleConfirmPasswordChange = this._handleConfirmPasswordChange.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
    this._handleSignOut = this._handleSignOut.bind(this);
    this._handleSignUp = this._handleSignUp.bind(this);
    this._onActionButtonClicked = this._onActionButtonClicked.bind(this);
    this._onDisplayChangeClicked = this._onDisplayChangeClicked.bind(this);
  }

  componentDidMount() {
    if (this.props.user.current_sign_in_at) {
      this.props.actions.setLoginFormDisplay('signOut');
    }
  }

  _clearInputs() {
    this.props.actions.setLoginFormEmail();
    this.props.actions.setLoginFormPassword();
    this.props.actions.setLoginFormConfirmPassword();

  }

  _handleConfirmPasswordChange(value) {
    this.props.actions.setLoginFormConfirmPassword(value);
  }

  _handleEmailChange(value) {
    this.props.actions.setLoginFormEmail(value);
  }

  _handlePasswordChange(value) {
    this.props.actions.setLoginFormPassword(value);
  }

  async _handleSignIn() {
    const {
      actions: {
        setUser,
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
    const user = await postRequest(url, data);
    if (user && user.current_sign_in_at) {
      setUser(user);
      this._clearInputs();
      this.context.router.push('/');
    };
  }

  async _handleSignOut() {
    const {
      actions: {
        setUser,
        setLoginFormDisplay,
      },
    } = this.props;
    const url = '/api/v1/user/session';
    const response = await deleteRequest(url);
    if (response.ok) {
      setUser();
      setLoginFormDisplay('signIn');
      this.context.router.push('/');
    }
  }

  async _handleSignUp() {
    const {
      actions: {
        setUser,
      },
      loginForm: {
        email,
        password,
        confirmPassword,
      },
    } = this.props;
    const url = '/api/v1/user/registration'
    const data = {
      user: {
        email,
        password,
        password_confirmation: confirmPassword,
      }
    };
    const user = await postRequest(url, data);
    if (user && user.current_sign_in_at) {
      setUser(user);
      this._clearInputs();
      this.context.router.push('/');
    };
  }

  _onActionButtonClicked() {
    const {
      loginForm: {
        display,
      },
    } = this.props;
    if (display === 'signIn') {
      this._handleSignIn();
    } else if (display === 'signOut') {
      this._handleSignOut();
    } else if (display === 'signUp') {
      this._handleSignUp();
    };
  }

  _onDisplayChangeClicked(value) {
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
