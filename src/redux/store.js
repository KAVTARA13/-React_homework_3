import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const rootStore = createStore(rootReducer, applyMiddleware(logger));

export default rootStore;