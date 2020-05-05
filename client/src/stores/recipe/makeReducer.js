const initialState = {
  list: [],
  current: {
    id: '',
    alias: '',
    content: '',
    cook: {
      id: '',
      name: '',
      email: '',
      avatarUrl: ''
    }
  }
}

function make(state = initialState, action) {
  const { make, type, list, change, makeId } = action
  switch(type){
    case 'GET_MAKE_LIST_COMPLETE':
      return {
        ...state,
        list: list,
        current: list[0]
      }

    case 'UPDATE_MAKE':
      return { ...state }
      
    case 'UPDATE_MAKE_COMPLETE':
      console.log("in update make")
      const newList = state.list.map(listMake => {
          if(listMake.id === make.id){
            return make
          } else {
            return listMake
          }
      })
      return {
        ...state,
        list: newList
      }

    case 'UPDATE_MAKE_VALUE':
      const { name, value } = change
      return {
        ...state,
        current: {
          ...state.current,
          [name]: value
        }
      }

    case 'CHANGE_CURRENT_MAKE':
      const newMake = state.list.find(thisMake => thisMake.id === makeId)
      return {
        ...state,
        current: {
          ...newMake
        }
      }

    default:
      return {...state}
  }

}

export default make
