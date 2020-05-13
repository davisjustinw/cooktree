import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes, clearRecipe } from '../stores/recipe/recipeActions'
import { clearMake } from '../stores/make/makeActions'
import { withStyles } from '@material-ui/core/styles'

import { Link as RouterLink } from 'react-router-dom'
import RecipeListing from './RecipeListing'
import List from '@material-ui/core/List'
import Loading from '../shared/Loading'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

class Recipes extends Component {
  componentDidMount() {
    this.props.getRecipes(this.props.userId)
    this.props.clearRecipe()
    this.props.clearMake()
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
        <Paper >
          <List>
          {
            recipes.map(recipe => (
              <RecipeListing key={recipe.id} recipe={recipe}/>
            ))
          }
          </List>
        </Paper>

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
  getRecipes: userId => dispatch(getRecipes(userId)),
  clearRecipe: () => dispatch(clearRecipe()),
  clearMake: () => dispatch(clearMake())
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Recipes))
