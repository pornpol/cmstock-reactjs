import {
  HTTP_LOGIN_FETCHING,
  HTTP_LOGIN_SUCCESS,
  HTTP_LOGIN_FAILED,
} from '../constants';

import Axios from 'axios';
import { setRegisterStateToFetching } from './register.action';

export const setLoginStateToFetching = () => ({
  type: HTTP_LOGIN_FETCHING,
});

export const setLoginStateToSuccess = (payload) => ({
  type: HTTP_LOGIN_SUCCESS,
  payload,
});

export const setLoginStateToFailed = () => ({
  type: HTTP_LOGIN_FAILED,
});

export const login = (history, credential) => {
  return async (dispatch) => {
    dispatch(setRegisterStateToFetching());
    let result = await Axios.post(
      'http://localhost:8000/api/v1/auth/login',
      credential
    );
    if (result.data.message === 'ok') {
      dispatch(setLoginStateToSuccess(result.data.data));
      history.push('/stock');
    } else {
      dispatch(setLoginStateToFailed());
    }
  };
};
