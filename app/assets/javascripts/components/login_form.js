import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const _buildErrors = ({ ...props }) => {
  const {
    loginForm: {
      errors,
    },
  } = { ...props };
  if (errors && errors.login && errors.login.length > 0) {
    return (
      <div className={`form-group text-center has-error}`} >
        {errors.login.map(e => <div className="text-warning" >{e}</div>)}
      </div>
    )
  }
};

const _buildForm = ({ ...props }) => {
  const {
    history,
    _handleEmailChange,
    _handlePasswordChange,
    _handleConfirmPasswordChange,
    _onActionButtonClicked,
    _onDisplayChangeClicked,
    loginForm: {
      display,
      email,
      password,
      confirmPassword,
      errors,
    },
  } = { ...props };
  if (display === 'signIn') {
    return (
      <section >
        <form >
          <div className={`form-group ${errors && errors.login && errors.login.length > 0 ? 'has-error' : ''}`} >
            <label className="sr-only" >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                e.preventDefault();
                _handleEmailChange(e.target.value);
              }}
            />
          </div>
          <div className={`form-group ${errors && errors.login && errors.login.length > 0 ? 'has-error' : ''}`} >
            <label className="sr-only" >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                e.preventDefault();
                _handlePasswordChange(e.target.value);
              }}
            />
          </div>
          <div className="form-group" >
            <button
              type="submit"
              className="btn btn-block btn-lg btn-primary"
              onClick={(e) => {
                e.preventDefault();
                _onActionButtonClicked();
              }}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="form-group text-center" >
          <Link
            to="/signup"
            onClick={(e) => {
              e.preventDefault();
              _onDisplayChangeClicked('signUp');
            }}
          >
            Not account yet? Sign Up
          </Link>
        </div>
      </section>
    );
  }
  if (display === 'signOut') {
    return (
      <section >
        <div className="form-group" >
          <Link
            to="/"
            className="btn btn-block btn-lg btn-primary"
          >
            Enter
          </Link>
        </div>
        <div className="form-group">
          <Link
            to="/"
            className="btn btn-block btn-lg btn-danger"
            onClick={(e) => {
              e.preventDefault();
              _onActionButtonClicked();
            }}
          >
            Sign Out
          </Link>
        </div>
      </section>
    );
  }
  if (display === 'signUp') {
    return (
      <section >
        <form >
          <div className={`form-group ${errors && errors.login && errors.login.length > 0 ? 'has-error' : ''}`} >
            <label className="sr-only" >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                e.preventDefault();
                _handleEmailChange(e.target.value);
              }}
            />
          </div>
          <div className={`form-group ${errors && errors.login && errors.login.length > 0 ? 'has-error' : ''}`} >
            <label className="sr-only" >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                e.preventDefault();
                _handlePasswordChange(e.target.value);
              }}
            />
          </div>
          <div className={`form-group ${errors && errors.login && errors.login.length > 0 ? 'has-error' : ''}`} >
            <label className="sr-only" >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => {
                e.preventDefault();
                _handleConfirmPasswordChange(e.target.value);
              }}
            />
          </div>
          <div className="form-group" >
            <button
              type="submit"
              className="btn btn-block btn-lg btn-primary"
              onClick={(e) => {
                e.preventDefault();
                _onActionButtonClicked();
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="form-group text-center" >
          <Link
            to="/login"
            onClick={(e) => {
              e.preventDefault();
              _onDisplayChangeClicked('signIn');
            }}
          >
            Already have an account? Sign In
          </Link>
        </div>
      </section>
    );
  }
};

const loginForm = ({ ...props }) => {
  const p = { ...props };
  return (
    <section className="container-fluid" >
      <div className="row" >
        <div className="center-block form__tile form__centered" >
          <h1 className="text-center" >Household Census</h1>
          {_buildErrors({ ...props })}
          {_buildForm({ ...props })}
        </div>
      </div>
    </section>
  )
};

export default loginForm;
