import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApplicationContainer from './containers/ApplicationContainer';
import HomePageContainer from './containers/HomePageContainer';
import LoginPageContainer from './containers/LoginPageContainer';

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
    this._userIsAuthorized = this._userIsAuthorized.bind(this);
  }

  _userIsAuthorized() {
    if (this.props.user.current_sign_in_at) {
      return true;
    }
    return false;
  }

  render() {
    const userIsAuthorized = this._userIsAuthorized();
    return (
      <Router history={browserHistory} >
        <Route
          path='/'
          component={ApplicationContainer}
          onEnter={(nextState, replace) => {
            if (!userIsAuthorized) {
              replace({
                pathname: '/login',
                state: {
                  nextPathname: nextState.location.pathname,
                },
              })
            }
          }}
        >
          <IndexRoute component={HomePageContainer} />
        </Route>
        <Route path='/' component={ApplicationContainer} >
          <Route path='login' component={LoginPageContainer} />
        </Route>
      </Router>
    )
  }

}

export default connect(mapStateToProps)(Routes);
