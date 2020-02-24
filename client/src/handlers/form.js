function changeHandler(event) {
  //console.log(`changeHandler => ${event.target.name}: ${event.target.value}`)
  this.setState({
    [event.target.name]: event.target.value
  })
}

function loginHandler(event) {
    event.preventDefault()

    const userInfo = this.state
    const headers = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch("http://localhost:3001/login", headers)
      .then(resp => resp.json())
      .then(console.log)
      .catch(console.log)
  }

export {
  changeHandler,
  loginHandler
}
