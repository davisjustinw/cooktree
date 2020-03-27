
function connections(state = [], action) {
  switch(action.type) {
    case 'GET_CONNECTIONS':
      const { connections } = action
      return connections
    default:
      return state;
  }
}

export default connections
