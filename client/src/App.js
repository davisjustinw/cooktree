import React, { Component } from 'react'
import Routes from './Routes'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/auth'
import Navbar from './components/Navbar'

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
