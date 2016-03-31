import React, { PropTypes } from 'react';

import Header from '../header';

import CensusFormContainer from '../../containers/census_form_container';

const homePage = ({ ...props }) => {
  const p = { ...props };
  return (
    <div id="home_page" >
      <Header
        _handleSignOut={p._handleSignOut}
      />
      <CensusFormContainer { ...props } />
    </div>
  );
};

export default homePage;
