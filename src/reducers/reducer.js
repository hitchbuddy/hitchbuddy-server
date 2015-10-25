import initialState from './initialState';
import hitchhikersList from './hitchhikersList';

export default function reducer(state = initialState(), action = {}) {
  switch (action.type) {
  case 'HITCHHIKERS_LIST':
    return hitchhikersList(state, action.hitchhikers, action.city, action.country);
  default:
    return state;
  }
}
