import { url, getHeader } from '../helpers/fetchHelpers'
//import { fakeFetch } from '../helpers/fakeAPI'
const clearRecipe = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_RECIPE' })
  }
}

const getRecipe = id => {
  return dispatch => {
    dispatch({ type: 'GET_RECIPE'})
    fetch(`${url}/recipes/${id}`, getHeader)
      .then(resp => resp.json())
      .then(recipe => {
        //console.log(recipe)
        dispatch({
          type: 'GET_RECIPE_COMPLETE',
          current: {
            id: recipe.id,
            name: recipe.name
          }
        })
        // make { id: 1, cookId: 2, alias: "Grandma's", content: 'weee' }
        dispatch({
          type: 'GET_MAKE_LIST_COMPLETE',
          list: recipe.makes
        })
        dispatch({
          type: 'GET_MEMORY_LIST_COMPLETE',
          list: recipe.memories
        })
      })
      .catch(console.log)
  } // end dispatch anonymous
} // end getRecipe

const getRecipes = id => {
  return dispatch => {
    dispatch({ type: 'GET_RECIPES'})
    fetch(`${url}/recipes`, getHeader)
      .then(resp => resp.json())
      .then(recipes => {
        console.log(recipes)
        dispatch({
          type: 'GET_RECIPE_LIST_COMPLETE',
          recipes: recipes
        })

      })
      .catch(console.log)
  } // end dispatch anonymous
} // end getRecipes

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
  clearRecipe,
  getRecipe,
  getRecipes,
  resetSuccess,
  updateRecipe,
  handleRecipeChange
}
