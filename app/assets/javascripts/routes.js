import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApplicationContainer from './containers/application_container';
import LoginPageContainer from './containers/login_page_container';

import HomePage from './components/pages/home_page';

import { getRequest } from './ajax';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUser } from './actions/user_actions';

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setUser,
    }, dispatch)
  }
}

class Routes extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      setUser: PropTypes.func.isRequired,
    }),
    user: PropTypes.object.isRequired,
  };

  _requireAuth = async (nextState, replace) => {
    const authorized = await this._userIsAuthorized();
    if (!authorized) {
      browserHistory.replace({
        pathname: '/login',
        state: {
          nextPathname: nextState.location.pathname,
        },
      });
    }
  }

  _userIsAuthorized = async () => {
    const {
      actions: {
        setUser,
      },
      user,
    } = this.props;
    if (user.current_sign_in_at) {
      return true;
    }
    const url = 'api/v1/user';
    const response = await getRequest(url);
    if (response.ok) {
      setUser(response.body);
      return true;
    }
    setUser();
    return undefined;
  }

  render() {
    return (
      <Router history={browserHistory} >
        <Route
          path='/'
          component={ApplicationContainer}
          onEnter={this._requireAuth}
        >
          <IndexRoute component={HomePage} />
        </Route>
        <Route path='/' component={ApplicationContainer} >
          <Route path='login' component={LoginPageContainer} />
          <Route path='signUp' component={LoginPageContainer} />
        </Route>
      </Router>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
