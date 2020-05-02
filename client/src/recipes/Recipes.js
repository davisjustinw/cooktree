import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../stores/recipe/recipeActions'
import { withStyles } from '@material-ui/core/styles'

import { Link as RouterLink } from 'react-router-dom'
import RecipeListing from './RecipeListing'
import Loading from '../shared/Loading'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

class Connections extends Component {
  componentDidMount() {
    this.props.getRecipes(this.props.userId)
  }

  render(){
    const { recipes, classes, userId } = this.props
    if(!recipes){
      return <Loading/>
    } else {
      return (
      <>
        <Typography variant='h4' gutterBottom>
          Recipes
        </Typography>
        {
          recipes.map(recipe => {
            return <RecipeListing key={recipe.id} recipe={recipe}/>
          })
        }
        <Fab
          component={RouterLink}
          to={`/users/${userId}/recipes/new`}
          color="secondary"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </>
    )
    }
  }
}

const mapStateToProps = ({ recipe, user }) => {
  return {
    recipes: recipe.list,
    userId: user.id
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRecipes: userId => dispatch(getRecipes(userId))
})

const useStyles = theme => ({
  fab: {
    margin: theme.spacing(0),
    top: 'auto',
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    left: 'auto',
    position: 'fixed',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Connections))
