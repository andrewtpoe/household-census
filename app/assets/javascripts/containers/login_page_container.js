import React, { Component, PropTypes } from 'react';

import {
  getRequest,
  postRequest,
} from '../ajax';

import LoginPage from '../components/pages/login_page';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setLoginFormValues,
  setLoginFormValuesToDefault,
} from '../actions/view/login_form_actions';
import { setUser } from '../actions/user_actions';

function mapStateToProps(state) {
  return {
    user: state.user.user,
    loginForm: state.view.loginForm,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setLoginFormValues,
      setLoginFormValuesToDefault,
      setUser,
    }, dispatch),
  };
};

class LoginPageContainer extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      setLoginFormValues: PropTypes.func.isRequired,
      setLoginFormValuesToDefault: PropTypes.func.isRequired,
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
        setLoginFormValues({
          display: 'signOut',
        });
      }
    }
  }

  _handleSignIn = async () => {
    const {
      actions: {
        setUser,
        setLoginFormValues,
        setLoginFormValuesToDefault,
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
      setLoginFormValuesToDefault();
      this.context.router.push('/');
    } else {
      setUser();
      setLoginFormValues({
        errors: response.body.errors
      });
    };
  }

  _handleSignUp = async () => {
    const {
      actions: {
        setUser,
        setLoginFormValues,
        setLoginFormValuesToDefault
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
    let errors;
    if (password.split('').length < 8) {
      errors = {
        login: ['Password must be 8+ characters'],
      };
    }
    if (password !== confirmPassword) {
      errors = {
        login: ['Passwords do not match'],
      };
    }
    if (!errors) {
      const url = '/api/v1/user/registration'
      const response = await postRequest(url, data);
      if (response.ok) {
        setUser(response.body);
        setLoginFormValuesToDefault();
        this.context.router.push('/');
      } else {
        errors = response.body.errors;
      }
    }
    setUser();
    setLoginFormValues({
      errors,
    });
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

  render() {
    const props = this.props;
    // console.log('*** LoginPageContainer props ***');
    // console.log(props);
    return (
      <LoginPage
        { ...props }
        _onActionButtonClicked={this._onActionButtonClicked}
        _onDisplayChangeClicked={this._onDisplayChangeClicked}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
