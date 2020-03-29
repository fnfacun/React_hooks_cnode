import { createStore, applyMiddleware, combineReducers  } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);

export default store;