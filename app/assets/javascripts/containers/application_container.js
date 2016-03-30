import React, { Children, Component, PropTypes } from 'react';

import {
  deleteRequest
} from '../ajax';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setLoginFormDisplay,
} from '../actions/view/login_form_actions';
import {
  setUser
} from '../actions/user_actions';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setLoginFormDisplay,
      setUser,
    }, dispatch),
  };
};

class ApplicationContainer extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this._handleSignOut = this._handleSignOut.bind(this);
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
      setLoginFormDisplay();
      this.context.router.push('/login');
    }
  }

  render() {
    const childrenWithProps = Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
        _handleSignOut: this._handleSignOut,
      })
    );
    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }

}

export default connect(undefined, mapDispatchToProps)(ApplicationContainer);
