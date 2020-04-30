import {
  HTTP_REGISTER_FETCHING,
  HTTP_REGISTER_SUCCESS,
  HTTP_REGISTER_FAILED,
} from '../constants';

import Axios from 'axios';

const setRegisterStateToFetching = () => ({
  type: HTTP_REGISTER_FETCHING,
});

const setRegisterStateToSuccess = (payload) => ({
  type: HTTP_REGISTER_SUCCESS,
  payload,
});

const setRegisterStateToFailed = () => ({
  type: HTTP_REGISTER_FAILED,
});

// For Register sequence fetch -> success/fail
export const register = (history, credential) => {
  return async (dispatch) => {
    dispatch(setRegisterStateToFetching());
    let result = await Axios.post(
      'http://localhost:8000/api/v1/auth/register',
      credential
    );
    if (result.data.message === 'ok') {
      dispatch(setRegisterStateToSuccess(result.data.data));
      history.push('/login');
    } else {
      dispatch(setRegisterStateToFailed());
    }
  };
};
