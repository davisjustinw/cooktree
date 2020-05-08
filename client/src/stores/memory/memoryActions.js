import { url, getHeader } from '../helpers/fetchHelpers'

const getMemories = recipeId => {
  console.log('getting memories')
  return dispatch => {
    dispatch({ type: 'GET_MEMORY_LIST'})
    fetch(`${url}/memories?recipe=${recipeId}`, getHeader)
      .then(resp => resp.json())
      .then(memories => {
        console.log(memories)
        dispatch({
          type: 'GET_MEMORY_LIST_COMPLETE',
          memories: memories
        })

      })
      .catch(console.log)
  } // end dispatch anonymous
} // end getRecipes

export {
  getMemories
}
