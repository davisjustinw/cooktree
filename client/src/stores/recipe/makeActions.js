
const updateMake = make => {
  return dispatch => {
    dispatch({ type: 'UPDATE_MAKE', make: make })
  }
}

const handleMakeChange = change => {
  return dispatch => {
    console.log(change)
    dispatch({
      type: 'UPDATE_MAKE_VALUE',
      change: change
    })
  }
}

export {
  updateMake,
  handleMakeChange,
}
