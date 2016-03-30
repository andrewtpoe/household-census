import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const header = ({ ...props }) => {
  const p = { ...props };
  return (
    <header >
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#mobile-nav-bar"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link
              className="navbar-brand"
              to="/"
            >
              Household Census
            </Link>
          </div>
          <div
            className="collapse navbar-collapse"
            id="mobile-nav-bar"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    p._handleSignOut();
                  }}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default header;
