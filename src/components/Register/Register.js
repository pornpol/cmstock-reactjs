/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Register = ({ history }) => {
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleFormChange = (name) => (e) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='hold-transition register-page'>
      <div className='register-box'>
        <div className='register-logo'>
          <a href='../../index2.html'>
            <b>CM</b>Stock
          </a>
        </div>
        <div className='card'>
          <div className='card-body register-card-body'>
            <p className='login-box-msg'>Register a new membership</p>
            <form className='mb-3'>
              <div className='input-group mb-3'>
                <input
                  onChange={handleFormChange('fullname')}
                  value={formState.fullname}
                  type='text'
                  className='form-control'
                  placeholder='Full name'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-user' />
                  </div>
                </div>
              </div>
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
              <div className='input-group mb-3'>
                <input
                  onChange={handleFormChange('password2')}
                  value={formState.password2}
                  type='password'
                  className='form-control'
                  placeholder='Retype password'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-lock' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-8'>
                  <div className='icheck-primary'>
                    <input
                      type='checkbox'
                      id='agreeTerms'
                      name='terms'
                      defaultValue='agree'
                    />
                    <label htmlFor='agreeTerms'>
                      I agree to the <a href='#'>terms</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className='col-4'>
                  <button
                    className='btn btn-primary btn-block'
                    onClick={handleFormSubmit}
                  >
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* <div className='social-auth-links text-center'>
              <p>- OR -</p>
              <a href='#' className='btn btn-block btn-primary'>
                <i className='fab fa-facebook mr-2' />
                Sign up using Facebook
              </a>
              <a href='#' className='btn btn-block btn-danger'>
                <i className='fab fa-google-plus mr-2' />
                Sign up using Google+
              </a>
            </div> */}
            <a
              href='#'
              className='text-center'
              onClick={() => {
                history.push('/login');
              }}
            >
              I already have a membership
            </a>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
      {/* /.register-box */}
    </div>
  );
};

export default Register;
