import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getRouteReducer} from './reducers/get-routes';

const store = createStore(
    getRouteReducer,
    applyMiddleware(thunk)
);

store.getState();

export default store;