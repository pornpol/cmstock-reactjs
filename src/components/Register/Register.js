/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { register } from '../../actions/register.action';
import { connect } from 'react-redux';

const Register = ({ history, register, registerReducer }) => {
  const [formState, setFormState] = useState({
    fullname: 'Pornpol Wasuwat',
    email: 'pornpol.w@gmail.com',
    password: 'qwertyui',
    password2: 'qwertyui',
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

              {registerReducer.isError && showError()}

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
                    onClick={(e) => {
                      e.preventDefault();
                      register(history, formState);
                    }}
                  >
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
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

const mapStateToProps = ({ registerReducer }) => ({
  registerReducer,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
