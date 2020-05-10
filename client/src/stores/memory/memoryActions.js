import { url } from '../helpers/fetchHelpers'

const handleMemoryChange = change => {
  console.log('handleMemoryChange')
  return dispatch => {
    dispatch({
      type: 'UPDATE_MEMORY_VALUE',
      change: change
    })
  }
}

const postMemory = data => {
  console.log('addNewMemory')
  return dispatch => {
    dispatch({ type: 'POST_MEMORY'})
    const headers = {
      method: 'POST',
      credentials: 'include',
      body: data
    }
    fetch(`${url}/memories`, headers)
      .then(resp => resp.json())
      .then(memory => {
        console.log('memory returned')
        console.log(memory)
        dispatch({ type: 'POST_MEMORY_COMPLETE', memory: memory })
        dispatch({ type: 'CLEAR_MEMORY' })
        dispatch({ type: 'TOGGLE_NEW_MEMORY'})
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}


export {
  handleMemoryChange,
  postMemory
}
