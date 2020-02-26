function changeHandler(event) {
  //console.log(`changeHandler => ${event.target.name}: ${event.target.value}`)
  this.setState({
    [event.target.name]: event.target.value
  })
}


export {
  changeHandler
}
