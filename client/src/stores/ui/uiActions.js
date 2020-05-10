const toggleMenuOpen = () => {
  return dispatch => dispatch({ type: 'TOGGLE_MENU_OPEN'})
}

const toggleHistoryOpen = () => {
  return dispatch => dispatch({ type: 'TOGGLE_HISTORY_OPEN'})
}

const toggleControlsOn = () => {
  console.log('toggle controls on action')
  return dispatch => dispatch({ type: 'TOGGLE_CONTROLS_ON' })
}

const toggleControlsOff = () => {
  console.log('toggle controls off action')
  return dispatch => dispatch({ type: 'TOGGLE_CONTROLS_OFF' })
}

const toggleNewMemory = () => {
  return dispatch => dispatch({ type: 'TOGGLE_NEW_MEMORY'})
}

export {
  toggleMenuOpen,
  toggleHistoryOpen,
  toggleControlsOn,
  toggleControlsOff,
  toggleNewMemory,
}
