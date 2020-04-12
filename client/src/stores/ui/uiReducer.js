const initialState = {
  mobileOpen: false
}

function ui(state = initialState, action) {
  switch(action.type){
    case 'TOGGLE_MOBILE_OPEN':
      return {
        ...state,
        mobileOpen: (!state.mobileOpen)
      }
    default:
      return state
  }
}

export default ui