function changeHandler(event) {
  console.log(`changelHandler => ${event.target.name}: ${event.target.value}`)
  this.setState({
    [event.target.name]: event.target.value
  })
}

export {
  changeHandler
}
