import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRecipe } from '../stores/recipe/recipeActions'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Loading from '../shared/Loading'
import RecipeCard from './RecipeCard'

class Recipe extends Component {
  componentDidMount(){
    console.log('recipe mounting')
    this.props.getRecipe(this.props.match.params.id)
  }

  render() {
    const { name, classes } = this.props
    if(!name){
      return <Loading/>
    } else {
      return (
        <>
          <Typography
            variant='h5'
            className={classes.title}
          >
            {name}
          </Typography>

          <RecipeCard />
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

const useStyles = theme => ({
  title: {
    marginBottom: theme.spacing(0)
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Recipe)))
