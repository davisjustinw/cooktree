function changeHandler(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

export {
  changeHandler
}
