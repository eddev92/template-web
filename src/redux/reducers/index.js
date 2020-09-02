import { combineReducers } from 'redux';
import auth from './auth';

const secureKeyManagerApp = combineReducers({
  auth,
})

export default secureKeyManagerApp