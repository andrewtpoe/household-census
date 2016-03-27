import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const homePage = ({ ...props }) => (
  <div id="home_page" >
    <Link to="/login" >login form</Link>
  </div>
);

export default homePage;
