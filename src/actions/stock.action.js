import {
  HTTP_STOCK_FETCHING,
  HTTP_STOCK_SUCCESS,
  HTTP_STOCK_FAILED,
} from '../constants';

import Axios from 'axios';

const setStateStockToFetching = () => ({
  type: HTTP_STOCK_FETCHING,
});

const setStateStockToSuccess = (payload) => ({
  type: HTTP_STOCK_SUCCESS,
  payload,
});

const setStateStockToFailed = () => ({
  type: HTTP_STOCK_FAILED,
});

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setStateStockToFetching());
    let result = await Axios.get('http://localhost:8000/api/v1/stock/products');
    if (result.data) {
      dispatch(setStateStockToSuccess(result.data));
      console.log(result.data);
    } else {
      dispatch(setStateStockToFailed());
    }
  };
};
