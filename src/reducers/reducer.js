import initialState from './initialState';

export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
  case 'HITCHHIKERS_LIST':
    return Object.assign({}, state, {hitchhikers: action.hitchhikers, currentCity: action.city});
  default:
    return state;
  }
}
