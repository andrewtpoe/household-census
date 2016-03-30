import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Header from '../header';

const homePage = ({ ...props }) => {
  const p = { ...props };
  return (
    <div id="home_page" >
      <Header
        _handleSignOut={p._handleSignOut}
      />
    </div>
  );
};

export default homePage;
