//import { url, getHeader } from '../helpers/fetchHelpers'

const handleMemoryChange = change => {
  console.log('handleMemoryChange')
  return dispatch => {
    dispatch({
      type: 'UPDATE_MEMORY_VALUE',
      change: change
    })
  }
}


export {
  handleMemoryChange
}
