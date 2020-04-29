/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Axios from 'axios';

const Login = ({ history }) => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      'http://localhost:8000/api/v1/auth/login',
      formState
    ).then((res) => console.log(res.data));
  };
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
              <div className='row'>
                {/* /.col */}
                <div className='col-12'>
                  <button
                    className='btn btn-primary btn-block'
                    onClick={handleFormSubmit}
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* <div className='social-auth-links text-center mb-3'>
              <p>- OR -</p>
              <a href='#' className='btn btn-block btn-primary'>
                <i className='fab fa-facebook mr-2' /> Sign in using Facebook
              </a>
              <a href='#' className='btn btn-block btn-danger'>
                <i className='fab fa-google-plus mr-2' /> Sign in using Google+
              </a>
            </div> */}
            {/* /.social-auth-links */}
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

export default Login;
