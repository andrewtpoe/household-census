import React, { Children, Component, PropTypes } from 'react';

import { deleteRequest } from '../ajax';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoginFormValuesToDefault } from '../actions/view/login_form_actions';
import { setUser } from '../actions/user_actions';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setLoginFormValuesToDefault,
      setUser,
    }, dispatch),
  };
};

class ApplicationContainer extends Component {

  static propTypes = {
    actions: PropTypes.shape({
      setLoginFormValuesToDefault: PropTypes.func.isRequired,
      setUser: PropTypes.func.isRequired,
    }),
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  _handleSignOut = async () => {
    const {
      actions: {
        setLoginFormValuesToDefault,
        setUser,
      },
    } = this.props;
    const url = '/api/v1/user/session';
    const response = await deleteRequest(url);
    if (response.ok) {
      setUser();
      setLoginFormValuesToDefault();
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
