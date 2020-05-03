//import { url, postHeader } from '../helpers/fetchHelpers'
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
    fakeFetch(
      dispatch({
        type: 'GET_MAKE_LIST_COMPLETE',
        list: [
          { id: 1, cookId: 2, alias: "Grandma's", content: 'weee' },
          { id: 2, cookId: 1, alias: "Moot's", content: 'double weee' },
          { id: 3, cookId: 2, alias: "Lexa's", content: 'double weee with a bit' },
        ]
      })
    )

  }
}

const getRecipes = id => {
  return dispatch => {
    dispatch({ type: 'GET_RECIPES'})
    fakeFetch(
      dispatch({
      type: 'GET_RECIPE_LIST_COMPLETE',
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
  getRecipe,
  getRecipes,
  resetSuccess,
  updateRecipe,
  handleRecipeChange
}
