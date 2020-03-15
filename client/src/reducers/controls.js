const initialState = {
  mobileOpen: false,
  drawerWidth: 240
}

function controls(state = initialState, action) {
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

export default controls