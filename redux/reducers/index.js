import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';


const rootReducer = combineReducers({
  blog: blogReducer,
  category: categoryReducer
});

export default rootReducer;
