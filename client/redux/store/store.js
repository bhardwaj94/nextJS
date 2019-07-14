import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
/* spell-checker: disable */
import { composeWithDevTools } from 'redux-devtools-extension';
/* spell-checker: disable */

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    composeWithDevTools(
      applyMiddleware(...middleware)
    ))
);

export default store;
