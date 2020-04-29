/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { login } from '../../actions/login.action';
import { connect } from 'react-redux';

const Login = ({ history, login, loginReducer }) => {
  const [formState, setFormState] = useState({
    email: 'pornpol.w@gmail.com',
    password: 'qwertyui',
  });

  const handleFormChange = (name) => (e) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  const showError = () => (
    <div className='alert alert-danger alert-dismissible'>
      <h5>
        <i className='icon fas fa-ban' /> Error!
      </h5>
      Incorrect Information
    </div>
  );

  return (
    <div className='hold-transition login-page'>
      <div className='login-box'>
        <div className='login-logo'>
          <a href='../../index2.html'>
            <b>CM</b>Stock
          </a>
        </div>
        {/* /.login-logo */}
        <div className='card'>
          <div className='card-body login-card-body'>
            <p className='login-box-msg'>Sign in to start your session</p>
            <form className='mb-3'>
              <div className='input-group mb-3'>
                <input
                  onChange={handleFormChange('email')}
                  value={formState.email}
                  type='email'
                  className='form-control'
                  placeholder='Email'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-envelope' />
                  </div>
                </div>
              </div>
              <div className='input-group mb-3'>
                <input
                  onChange={handleFormChange('password')}
                  value={formState.password}
                  type='password'
                  className='form-control'
                  placeholder='Password'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-lock' />
                  </div>
                </div>
              </div>

              {loginReducer.isError && showError()}

              <div className='row'>
                {/* /.col */}
                <div className='col-12'>
                  <button
                    className='btn btn-primary btn-block'
                    onClick={(e) => {
                      e.preventDefault();
                      login(history, formState);
                    }}
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className='mb-1'>
              <a href='forgot-password.html'>I forgot my password</a>
            </p>
            <p className='mb-0'>
              <a
                href='#'
                className='text-center'
                onClick={() => {
                  history.push('/register');
                }}
              >
                Register a new membership
              </a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ loginReducer }) => ({
  loginReducer,
});

const mapDispatchTpProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Login);
