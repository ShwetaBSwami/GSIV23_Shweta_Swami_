import { combineReducers } from 'redux';
import pageNumberReducer from './pageNumberReducer';

const rootReducer = combineReducers({
  pageNumber: pageNumberReducer,
});

export default rootReducer;
