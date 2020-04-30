import {
  HTTP_LOGIN_FETCHING,
  HTTP_LOGIN_SUCCESS,
  HTTP_LOGIN_FAILED,
} from '../constants';

import Axios from 'axios';

const setLoginStateToFetching = () => ({
  type: HTTP_LOGIN_FETCHING,
});

const setLoginStateToSuccess = (payload) => ({
  type: HTTP_LOGIN_SUCCESS,
  payload,
});

const setLoginStateToFailed = () => ({
  type: HTTP_LOGIN_FAILED,
});

export const autoLogin = (history) => {
  return () => {
    if (localStorage.getItem('LOGIN_PASSED') === 'yes') {
      setTimeout(() => history.push('/stock'), 100);
    }
  };
};

export const login = (history, credential) => {
  return async (dispatch) => {
    dispatch(setLoginStateToFetching());
    let result = await Axios.post(
      'http://localhost:8000/api/v1/auth/login',
      credential
    );
    if (result.data.message === 'ok') {
      localStorage.setItem('LOGIN_PASSED', 'yes');
      history.push('/stock');
      dispatch(setLoginStateToSuccess(result.data.data));
    } else {
      dispatch(setLoginStateToFailed());
    }
  };
};
