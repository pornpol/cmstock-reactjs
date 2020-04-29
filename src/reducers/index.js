import registerReducer from './register.reducer';
import loginReducer from './login.reducer';
import { combineReducers } from 'redux';

export default combineReducers({ registerReducer, loginReducer });
