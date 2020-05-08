const initialState = {
  list: [],
  current: {
    id: '',
    share: '',
    photo_url: '',
  }
}

function memory(state = initialState, action) {
  const { type, list } = action
  switch(type){
    case 'CLEAR_MEMORY':

      return {
        ...state,
        current: {
          id: '',
          share: '',
          photo_url: '',
        }
      }

    case 'GET_MEMORY_LIST':
      return {
        ...state
      }

    case 'GET_MEMORY_LIST_COMPLETE':
      
      return {
        ...state,
        list: list,
        current: list[0]
      }

    default:
      return {...state}
  }

}

export default memory
