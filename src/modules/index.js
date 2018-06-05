import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counter } from '../state/reducers/counterReducer';

export default combineReducers({
	routing: routerReducer,
	counter
})