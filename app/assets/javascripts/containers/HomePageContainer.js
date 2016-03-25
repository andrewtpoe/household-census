import React, { Component, PropTypes } from 'react';

import HomePage from '../components/pages/home';

class HomePageContainer extends Component {

  render() {
    const props = this.props;
    return (
      <HomePage { ...props }/>
    );
  }

}

export default HomePageContainer;
