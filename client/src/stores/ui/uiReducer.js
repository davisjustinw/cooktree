const initialState = {
  mobileOpen: false,
  showControls: false,
}

function ui(state = initialState, action) {
  switch(action.type){
    case 'TOGGLE_MOBILE_OPEN':
      return {
        ...state,
        mobileOpen: (!state.mobileOpen)
      }
    case 'TOGGLE_CONTROLS_ON':
      console.log('toggle controls on dispatch')
      return {
        ...state,
        showControls: true
      }
    case 'TOGGLE_CONTROLS_OFF':
      console.log('toggle controls off dispatch')
      return {
        ...state,
        showControls: false
      }
    default:
      return state
  }
}

export default ui
