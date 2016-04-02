import React, { PropTypes } from 'react';

import Header from '../header';

import CensusFormContainer from '../../containers/census_form_container';

const homePage = ({
  _handleSignOut,
  ...props
}) => (
  <div id="home_page" >
    <Header
      _handleSignOut={_handleSignOut}
    />
    <CensusFormContainer { ...props } />
  </div>
);

export default homePage;
