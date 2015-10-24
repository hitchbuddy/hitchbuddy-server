export function findHitchhikers(city) {
  return (dispatch) => {
    const hitchhikers = ['hitchhiker1', 'hitchhiker2'];
    return dispatch({
      type: 'HITCHHIKERS_LIST',
      hitchhikers: hitchhikers,
      city: city,
    });
  };
}
