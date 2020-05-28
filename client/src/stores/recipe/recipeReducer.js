const initialState = {
  submitSuccess: false,
  forbidden: false,
  list: [],
  current: {
    id: '',
    name: ''
  }
}

function recipe(state = initialState, action) {
  const { type, current, recipes, recipe, change } = action

  switch(type) {
    case 'RECIPE_FORBIDDEN':
      return {
        ...state,
        forbidden: true
      }
    case 'CLEAR_RECIPE':
      return {
        ...state,
        submitSuccess: false,
        forbidden: false,
        current: {
          id: '',
          name: ''
        }
      }
    case 'CLEAR_RECIPES':
      return {
        ...state,
        submitSuccess: false,
        forbidden: false,
        current: {
          id: '',
          name: ''
        },
        list: []
      }
    case 'GET_RECIPE_LIST':
      return { ...state }

    case 'GET_RECIPE_LIST_COMPLETE':
      return {
        ...state,
        list: recipes
      }
    case 'GET_RECIPE':
      return { ...state }

    case 'GET_RECIPE_COMPLETE':
      return {
        ...state,
        current: {
          ...state.current,
          ...current
        }
      }
    case 'POST_RECIPE':
      return { ...state }

    case 'POST_RECIPE_COMPLETE':
      console.log('post recipe complete')

      return {
        ...state,
        submitSuccess: true
      }
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        submitSuccess: false
      }
    case 'UPDATE_RECIPE':
      console.log("in update recipe")
      const newList = state.list.map(thisConnection => {
          if(thisConnection.id === recipe.id){
            return recipe
          } else {
            return thisConnection
          }
      })
      return {
        ...state,
        list: newList
      }

    case 'UPDATE_RECIPE_VALUE':
      const { name, value } = change
      return {
        ...state,
        current: {
          ...state.current,
          [name]: value
        }
      }

    default:
      return state
  }
}

export default recipe
