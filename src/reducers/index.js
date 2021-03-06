import registerReducer from './register.reducer';
import loginReducer from './login.reducer';
import stockReducer from './stock.reducer';
import stockEditReducer from './stock.edit.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  registerReducer,
  loginReducer,
  stockReducer,
  stockEditReducer,
});
