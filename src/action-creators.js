export function findHitchhikersByCity(city) {
  return (dispatch) => {
    const hitchhikers = ['hitchhiker1', 'hitchhiker2'];
    return dispatch({
      type: 'HITCHHIKERS_LIST',
      hitchhikers: hitchhikers,
      city: city,
    });
  };
}

export function findHitchhikersByCountry(country) {
  return (dispatch) => {
    const hitchhikers = ['hitchhiker1', 'hitchhiker2'];
    return dispatch({
      type: 'HITCHHIKERS_LIST',
      hitchhikers: hitchhikers,
      country: country,
    });
  };
}

