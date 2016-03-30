import React, { Component, PropTypes } from 'react';

import HomePage from '../components/pages/home_page';

class HomePageContainer extends Component {

  render() {
    const props = this.props;
    // console.log('*** HomePageContainer props ***');
    // console.log(props);
    return (
      <HomePage { ...props }/>
    );
  }

}

export default HomePageContainer;
