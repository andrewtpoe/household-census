import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApplicationContainer from './containers/application_container';
import HomePageContainer from './containers/home_page_container';
import LoginPageContainer from './containers/login_page_container';

import { connect } from 'react-redux';
import redux from 'redux';

function mapStateToProps(state) {
  return {
    user: state.user.user,
  };
}

class Routes extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this._requireAuth = this._requireAuth.bind(this);
    this._userIsAuthorized = this._userIsAuthorized.bind(this);
  }

  _requireAuth(nextState, replace) {
    const authorized = this._userIsAuthorized();
    if (!authorized) {
      replace({
        pathname: '/login',
        state: {
          nextPathname: nextState.location.pathname,
        },
      })
    }
  }

  _userIsAuthorized() {
    let authorized;
    if (this.props.user.current_sign_in_at) {
      authorized = true;
    }
    return authorized;
  }

  render() {
    const userIsAuthorized = this._userIsAuthorized;
    return (
      <Router history={browserHistory} >
        <Route
          path='/'
          component={ApplicationContainer}
          onEnter={this._requireAuth}
        >
          <IndexRoute component={HomePageContainer} />
        </Route>
        <Route path='/' component={ApplicationContainer} >
          <Route path='login' component={LoginPageContainer} />
          <Route path='signUp' component={LoginPageContainer} />
        </Route>
      </Router>
    )
  }

}

export default connect(mapStateToProps)(Routes);
