const initialState = {
  list: [],
  current: {
    id: '',
    makeId: '',
    share: '',
    photoUrl: '',
    photoFile: ''
  }
}

function memory(state = initialState, action) {
  const { type, change, list, memory } = action
  switch(type){
    case 'CLEAR_MEMORY':

      return {
        ...state,
        current: {
          id: '',
          makeId: '',
          share: '',
          photoUrl: '',
          photoFile: ''
        }
      }

    case 'GET_MEMORY_LIST':
      return {
        ...state
      }

    case 'GET_MEMORY_LIST_COMPLETE':
      return {
        ...state,
        list: list
      }

    case 'UPDATE_MEMORY_VALUE':
      const { name, value } = change
      return {
        ...state,
        current: {
          ...state.current,
          [name]: value
        }
      }

    case 'POST_MEMORY':
      return {
        ...state
      }

    case 'POST_MEMORY_COMPLETE':
      return {
        ...state,
        list: [...state.list, memory],
      }

    default:
      return {...state}
  }

}

export default memory
