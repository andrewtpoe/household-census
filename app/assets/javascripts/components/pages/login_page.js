import React, { PropTypes } from 'react';

import LoginForm from '../login_form';

const loginPage = ({ ...props }) => (
  <section >
    <LoginForm { ...props } />
  </section>
);

export default loginPage;
