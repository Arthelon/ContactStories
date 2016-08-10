import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import MainReducer from './MainReducer'
import UIReducer from './UIReducer'

const rootReducer = combineReducers({
  main: MainReducer,
  ui: UIReducer,
  routing
});

export default rootReducer;
