const initialState = {
  list: [],
  current: {
    id: '',
    alias: '',
    content: ''
  }
}

function make(state = initialState, action) {
  const { make, type, list, change } = action
  switch(type){
    case 'GET_MAKELIST_COMPLETE':
      return {
        ...state,
        list: list,
        current: list[0]
      }

    case 'UPDATE_MAKE':
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
      console.log('in UPDATE_MAKE_VALUE')
      const { name, value } = change

      return {
        ...state,
        current: {
          ...state.current,
          [name]: value
        }
      }

    default:
      return {...state}
  }

}

export default make
