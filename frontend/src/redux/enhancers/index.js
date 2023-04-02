import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

const enhancers = [
    applyMiddleware(thunk)
]

if (process.env.NODE_ENV === 'development') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default enhancers;