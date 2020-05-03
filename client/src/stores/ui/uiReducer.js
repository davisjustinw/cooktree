const initialState = {
  menuOpen: false,
  historyOpen: false,
  showControls: false,
}

function ui(state = initialState, action) {
  switch(action.type){
    case 'TOGGLE_MENU_OPEN':
      return {
        ...state,
        menuOpen: (!state.menuOpen)
      }
    case 'TOGGLE_MENU_OPEN_FALSE':
      return {
        ...state,
        menuOpen: false
      }
    case 'TOGGLE_HISTORY_OPEN':
      return {
        ...state,
        historyOpen: (!state.historyOpen)
      }
    case 'TOGGLE_HISTORY_OPEN_FALSE':
      return {
        ...state,
        historyOpen: false
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
