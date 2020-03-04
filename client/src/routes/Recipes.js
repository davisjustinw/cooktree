import React from 'react'
import { connect } from 'react-redux'

const Recipes = props => {
  return (
    <div>
      <h2>Recipes</h2>
      {console.log('recipes')}
      {console.log(props)}
      <h3>Some Recipes</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Recipes)
