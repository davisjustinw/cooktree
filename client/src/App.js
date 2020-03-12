import React, { Component } from 'react'
import Routes from './Routes'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/auth'
import NavBar from './components/NavBar'

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes/>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
