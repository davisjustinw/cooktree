const toggleMobileOpen = event => {
  //console.log(event.target)

  return dispatch => dispatch({ type: 'TOGGLE_MOBILE_OPEN'})
}


export {
  toggleMobileOpen
}
