import React, { Component } from 'react'
import { changeHandler } from '../handlers/form'


class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);

  handleSubmit = (event) => {
      event.preventDefault()

      const userInfo = this.state;
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


  render() {
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type='text'
            name='email'
            value={this.state.email}
            placeholder='email'
          /><br/>
          <input
            onChange={this.handleChange}
            type='text'
            name='password'
            value={this.state.password}
            placeholder='password'
          /><br/>
          <input type='submit'/>
        </form>
      </div> //end login
    )
  }
}

export default Login;
