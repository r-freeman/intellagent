import {createStore, compose} from 'redux';
import rootReducer from '../reducers';
import enhancers from '../enhancers';

const store = createStore(
    rootReducer,
    compose(...enhancers)
)

export default store;