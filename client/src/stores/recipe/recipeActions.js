import { url, postHeader } from '../helpers/fetchHelpers'
import { fakeFetch } from '../helpers/fakeAPI'

const getRecipe = id => {
  return dispatch => {
    dispatch({ type: 'GET_RECIPE'})
    fakeFetch(
      dispatch({
        type: 'GET_RECIPE_COMPLETE',
        current: {
          id: 1,
          name: 'rad recipe'
        }
      })
    )
  }
}

const getRecipes = id => {
  return dispatch => {
    dispatch({ type: 'GET_RECIPES'})
    fakeFetch(
      dispatch({
      type: 'GET_RECIPES_COMPLETE',
      recipes: [
        {
          id: 1,
          name: 'rad recipe1'
        },
        {
          id: 2,
          name: 'rad recipe2'
        }
      ]
      })
    )
  }
}

const postRecipe = recipe => {
  return dispatch => {
    dispatch({ type: 'POST_RECIPE' })
    fetch(`${url}/recipes`, postHeader(recipe))
      .then(resp => resp.json())
      .then(json => {
        catch_errors_dispatch_connections(json, dispatch)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

const catch_errors_dispatch_connections = (json, dispatch) => {
    const { id, error, validation_errors } = json
    if(id){
      dispatch({ type: 'CLEAR_ERRORS' })
      dispatch({
        type: 'POST_RECIPE_COMPLETE'
      })
    } else if (error) {
      dispatch({
        type: 'UPDATE_ERRORS',
        error: error
      })
    } else if (validation_errors) {
      dispatch({
        type: 'UPDATE_VALIDATION_ERRORS',
        validation_errors: validation_errors
      })
    }
}

const resetSuccess = () => {
  return dispatch => {
    dispatch({ type: 'SUBMIT_SUCCESS' })
  }
}

const updateRecipe = recipe => {
  return dispatch => {
    dispatch({ type: 'UPDATE_RECIPE', recipe: recipe })
  }
}

const handleRecipeChange = change => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_RECIPE_VALUE',
      change: change
    })
  }
}

export {
  getRecipes,
  postRecipe,
  getRecipe,
  resetSuccess,
  updateRecipe,
  handleRecipeChange
}
