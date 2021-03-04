import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

const enhancers = [
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]

export default enhancers;