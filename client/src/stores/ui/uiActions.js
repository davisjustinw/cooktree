const toggleMobileOpen = event => {
  return dispatch => dispatch({ type: 'TOGGLE_MOBILE_OPEN'})
}

const toggleControlsOn = () => {
  console.log('toggle controls on action')
  return dispatch => dispatch({ type: 'TOGGLE_CONTROLS_ON' })
}

const toggleControlsOff = () => {
  console.log('toggle controls off action')
  return dispatch => dispatch({ type: 'TOGGLE_CONTROLS_OFF' })
}

export {
  toggleMobileOpen,
  toggleControlsOn,
  toggleControlsOff
}
