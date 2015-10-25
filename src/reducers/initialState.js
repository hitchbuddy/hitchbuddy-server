import {Map, List} from 'immutable';

export default function initialState() {
  return new Map({
    hitchhikers: new List,
    selectedCity: '',
    selectedCountry: '',
  });
}
