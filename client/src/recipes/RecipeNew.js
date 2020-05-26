import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { clearRecipe } from '../stores/recipe/recipeActions'
import { clearMake, clearMakeList, handleMakeChange } from '../stores/make/makeActions'
import { withStyles } from '@material-ui/core/styles'
import { handleRecipeChange } from '../stores/recipe/recipeActions'

import NewRecipeHeader from './NewRecipeHeader'
import RecipeCard from './RecipeCard'


class RecipeNew extends Component {

  componentDidMount(){
    this.props.clearRecipe()
    this.props.clearMake()
    this.props.clearMakeList()
    console.log('RecipeNew')
  }

  handleRecipeChange = ({ target }) => {
    this.props.handleRecipeChange({ name: target.name, value: target.value })
  }

  handleMakeChange = ({ target }) => {
    this.props.handleMakeChange({ name: target.name, value: target.value })
  }

  render() {
    const { recipe, make, classes } = this.props
      if(recipe.id) {
        return <Redirect to={{ pathname: `/recipes/${recipe.id}` }} />
      } else {
        return (
          <>
            <div className={classes.paper}>

            <NewRecipeHeader
              handleRecipeChange={this.handleRecipeChange}
              handleMakeChange={this.handleMakeChange}
              recipe={recipe}
              make={make}
              />
            <RecipeCard recipe={recipe} make={make} handleMakeChange={this.handleMakeChange}/>
            </div>
          </>
        )
      }

  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  clearRecipe: () => dispatch(clearRecipe()),
  clearMake: () => dispatch(clearMake()),
  clearMakeList: () => dispatch(clearMakeList()),
  handleRecipeChange: change => dispatch(handleRecipeChange(change)),
  handleMakeChange: change => dispatch(handleMakeChange(change))
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(RecipeNew)))
