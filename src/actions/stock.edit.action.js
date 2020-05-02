import {
  HTTP_STOCK_EDIT_SUCCESS,
  HTTP_STOCK_EDIT_FETCHING,
  HTTP_STOCK_EDIT_FAILED,
  HTTP_STOCK_EDIT_INITIALED,
} from '../constants';

import Axios from 'axios';

const setStateStockToFetching = () => ({
  type: HTTP_STOCK_EDIT_FETCHING,
});

const setStateStockToSuccess = (payload) => ({
  type: HTTP_STOCK_EDIT_SUCCESS,
  payload,
});

const setStateStockToFailed = () => ({
  type: HTTP_STOCK_EDIT_FAILED,
});

const setStateStockToInitialed = (isFinished) => ({
  type: HTTP_STOCK_EDIT_INITIALED,
  payload: isFinished,
});

export const getProductById = (id) => {
  return async (dispatch) => {
    dispatch(setStateStockToFetching());
    dispatch(setStateStockToInitialed(false));
    try {
      let result = await Axios.get(
        `http://localhost:8000/api/v1/stock/product/${id}`
      );
      if (result.data.message === 'ok') {
        dispatch(setStateStockToSuccess(result.data));
        dispatch(setStateStockToInitialed(true));
      } else {
        dispatch(setStateStockToFailed());
      }
    } catch (err) {
      dispatch(setStateStockToFailed());
    }
  };
};

// export const updateProduct = (history, formData) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setStateStockToFetching());
//       let result = await Axios.put(
//         `http://localhost:8000/api/v1/stock/product/`,
//         formData
//       );
//       console.log(result);
//       if (result.data.message === 'ok') {
//         dispatch(setStateStockToSuccess(result.data));
//         history.push('/stock');
//       } else {
//         dispatch(setStateStockToFailed());
//       }
//     } catch (err) {
//       dispatch(setStateStockToFailed());
//     }
//   };
// };

export const isFinishInitialization = (isInitialization) => {
  return (dispatch) => {
    dispatch(setStateStockToInitialed);
  };
};
