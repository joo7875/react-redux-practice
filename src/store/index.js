import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
// state in Redux comes from reducers
// reducers produce the state of your application

export default store;