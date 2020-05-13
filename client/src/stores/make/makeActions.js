import { url } from '../helpers/fetchHelpers'

const clearMake = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_MAKE' })
  }
}

const clearMakeList = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_MAKE_LIST' })
  }
}

const addNewMake = (recipe, make) => {
  return dispatch => {
    dispatch({ type: 'ADD_NEW_MAKE'})
    const headers = {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        make: {
          recipe_id: recipe.id,
          alias: make.alias,
          content: make.content,
        },
        recipe: {
          id: recipe.id,
          name: recipe.name
        }
      })
    }
    fetch(`${url}/makes`, headers)
      .then(resp => resp.json())
      .then(make => {
        console.log('returned make')
        console.log(make)
        dispatch({ type: 'ADD_NEW_MAKE_COMPLETE', make: make })
        dispatch({
          type: 'UPDATE_RECIPE_VALUE',
          change: { name: 'id' , value: make.recipeId }
        })
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

const updateMake = (make) => {
  return dispatch => {
    dispatch({ type: 'UPDATE_MAKE' })
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
  clearMake,
  clearMakeList,
  addNewMake,
  updateMake,
  handleMakeChange,
  changeCurrentMake
}
