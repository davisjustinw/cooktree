import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './routes/Login';
import Signup from './routes/Signup';
import Recipes from './routes/Recipes';

import { getCurrentUser } from './actions/auth'

class Routes extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('mounting')
    console.log(this.props)
    this.props.getCurrentUser()
  }

  RootRedirect(proppers) {
    console.log('rootRedirect')
    console.log(proppers)
    return <Recipes />
  }

  render() {
    return (
      <Switch>
        {console.log('switch')}
        {console.log(this.props)}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/' render={this.RootRedirect} />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
