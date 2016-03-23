import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Redux from 'redux';
import { Provider } from 'react-redux';
import store from './store';

import Router from './router';

function application() {
  const div = document.querySelector('[data-js="app_main"]');
  if (div) {
    ReactDOM.render(
      <Provider store={store}>
        <Router />
      </Provider>, div
    );
  }
};

// application();
