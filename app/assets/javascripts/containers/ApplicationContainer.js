import React, { Children, Component, PropTypes } from 'react';

class ApplicationContainer extends Component {

  render() {
    const childrenWithProps = Children.map(this.props.children, (child) =>
      React.cloneElement(child, {})
    );

  return (
    <div>
      {childrenWithProps}
    </div>
  );
  }

}

export default ApplicationContainer;
