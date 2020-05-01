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

export const addProduct = (history, formData) => {
  return async (dispatch) => {
    await Axios.post(`http://localhost:8000/api/v1/stock/product/`, formData);
    history.push('/stock');
  };
};

export const getProductByKeyword = (event) => {
  return (dispatch) => {
    var keyword = event.target.value;
    dispatch(setStateStockToFetching());

    if (keyword !== null && keyword !== '') {
      Axios.get(
        `http://localhost:8000/api/v1/stock/product/keyword/${keyword}`
      ).then((result) => {
        dispatch(setStateStockToSuccess(result.data));
      });
    } else {
      doGetProducts(dispatch);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(setStateStockToFetching());
    await Axios.delete(`http://localhost:8000/api/v1/stock/product/${id}`);
    await doGetProducts(dispatch);
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setStateStockToFetching());
    doGetProducts(dispatch);
  };
};

const doGetProducts = (dispatch) => {
  Axios.get('http://localhost:8000/api/v1/stock/products')
    .then((result) => {
      dispatch(setStateStockToSuccess(result.data));
    })
    .catch((error) => {
      alert(JSON.stringify(error));
      dispatch(setStateStockToFailed());
    });
};
