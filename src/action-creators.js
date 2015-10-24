export function findHitchhikers() {
  return (dispatch) => {
    const hitchhikers = ['hitchhiker1', 'hitchhiker2'];
    return dispatch({
      type: 'HITCHHIKERS_LIST',
      hitchhikers: hitchhikers,
    });
  };
}
