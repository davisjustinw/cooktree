
const updateMakeList = make => {
  return dispatch => {
    dispatch({ type: 'UPDATE_MAKE_LIST', make: make })
  }
}

const handleMakeChange = change => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_MAKE_VALUE',
      change: change
    })
  }
}

const changeCurrentMake = id => {
  return dispatch => {
    dispatch({
      type: 'CHANGE_CURRENT_MAKE',
      makeId: id
    })
  }
}

export {
  updateMakeList,
  handleMakeChange,
  changeCurrentMake
}
