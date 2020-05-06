import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { clearRecipe } from '../stores/recipe/recipeActions'
import { clearMake } from '../stores/recipe/makeActions'
import { withStyles } from '@material-ui/core/styles'
import { handleRecipeChange } from '../stores/recipe/recipeActions'

import RecipeCard from './RecipeCard'
import InputBase from '@material-ui/core/InputBase'

class Recipe extends Component {

  componentDidMount(){
    this.props.clearRecipe()
    this.props.clearMake()
  }

  handleRecipeChange = ({ target }) => {
    this.props.handleRecipeChange({ name: target.name, value: target.value })
  }

  render() {
    const { recipe, make, classes } = this.props
  
    return (
      <>
        <div className={classes.paper}>
        <InputBase
          classes={{
            root: classes.root,
            input: classes.input
          }}
          type='text'
          name='name'
          value={recipe.name}
          onChange={this.handleRecipeChange}
          placeholder='Recipe Name...'
        />
        <RecipeCard recipe={recipe} make={make}/>
        </div>
      </>
    )
  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  clearRecipe: () => dispatch(clearRecipe()),
  clearMake: () => dispatch(clearMake()),
  handleRecipeChange: change => dispatch(handleRecipeChange(change))
})

const mapStateToProps = ({ recipe, make }) => ({
  recipe: recipe.current,
  make: make.current
})

const useStyles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    alignSelf: 'flex-start'
  },
  input: {
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0),
    color: theme.palette.text.primary,
    ...theme.typography.h5,
    '&::placeholder':{
      color: theme.palette.text.secondary,
      opacity: 1,
      ...theme.typography.h5
    }
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Recipe)))
