import { createStore, combineReducers  } from 'redux';
import reducers from './reducers/index';

const store = createStore(
    combineReducers(reducers)
);

export default store;