import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import metrics from './Analytics/metrics';
import main from './App/main';

export default combineReducers({
  routing: routerReducer,
  main,
  metrics,
});
