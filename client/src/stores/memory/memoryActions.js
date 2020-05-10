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
    dispatch({ type: 'ADD_NEW_MEMORY'})
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
        dispatch({ type: 'ADD_NEW_MEMORY_COMPLETE', memory: memory })
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
