import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function makeStore(state) {
  return createStoreWithMiddleware(reducer, state);
}
