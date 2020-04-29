import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRecipe } from '../stores/recipe/recipeActions'

import Typography from '@material-ui/core/Typography'
import Loading from '../shared/Loading'

class Recipe extends Component {
  componentDidMount(){
    console.log('recipe mounting')
    this.props.getRecipe(this.props.match.params.id)
  }

  render() {
    const { name } = this.props
    if(!name){
      return <Loading/>
    } else {
      return (
        <>
          <Typography variant='h4' >{name}</Typography>


        </>
      )
    } // else
  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  getRecipe: recipeId => dispatch(getRecipe(recipeId))
})

const mapStateToProps = ({ recipe }) => {
  const { current } = recipe
  return {
    id: current.id,
    name: current.name
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe))
