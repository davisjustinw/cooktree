import { url } from '../helpers/fetchHelpers'

const updateMake = make => {
  return dispatch => {
    dispatch({ type: 'UPDATE_MAKE' })
    dispatch({ type: ''})
    const headers = {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ make: make })
    }
    console.log(headers)
    fetch(`${url}/makes/${make.id}`, headers)
      .then(resp => resp.json())
      .then(make => {
        dispatch({ type: 'UPDATE_MAKE_COMPLETE', make: make })
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
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
  updateMake,
  handleMakeChange,
  changeCurrentMake
}
