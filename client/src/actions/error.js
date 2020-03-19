const updateErrors = error => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_ERRORS',
      error: error
    })
  }
}

const clearErrors = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_ERRORS'
    })
  }
}

export {
  updateErrors,
  clearErrors
}
