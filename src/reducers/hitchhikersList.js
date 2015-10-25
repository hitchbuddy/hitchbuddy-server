import {List} from 'immutable';

export default function hitchhikersList(state, hitchhikers, city, country) {
  return state.set('hitchhikers', new List(hitchhikers)).set('selectedCity', city || '').set('selectedCountry', country || '');
}
