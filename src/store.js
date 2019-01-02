import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { getRouteReducer, postRouteReducer } from './reducers/routes';

const store = createStore(
  combineReducers({
		form: formReducer,
		get: getRouteReducer,
		post: postRouteReducer
	}),
  applyMiddleware(thunk)   
);

store.getState();

export default store;