import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRecipe } from '../stores/recipe/recipeActions'
import { withStyles } from '@material-ui/core/styles'
import { handleRecipeChange } from '../stores/recipe/recipeActions'
import { handleMakeChange } from '../stores/recipe/makeActions'
import Loading from '../shared/Loading'
import RecipeHeader from './RecipeHeader'
import RecipeCard from './RecipeCard'

class Recipe extends Component {

  componentDidMount(){
    console.log('recipe mounting')
    this.props.getRecipe(this.props.match.params.id)
  }

  handleRecipeChange = ({ target }) => {
    this.props.handleRecipeChange({ name: target.name, value: target.value })
  }

  handleMakeChange = ({ target }) => {
    this.props.handleMakeChange({ name: target.name, value: target.value })
  }

  render() {
    const { recipe, make, classes } = this.props

    if(!recipe.id){
      return <Loading/>
    } else {
      return (
        <>
          <div className={classes.paper}>

          <RecipeHeader
            handleRecipeChange={this.handleRecipeChange}
            handleMakeChange={this.handleMakeChange}
            recipe={recipe}
            make={make}
            />
          <RecipeCard
            handleMakeChange={this.handleMakeChange}
            recipe={recipe}
            make={make}
            />
          </div>
        </>
      )
    } // else
  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  getRecipe: recipeId => dispatch(getRecipe(recipeId)),
  handleRecipeChange: change => dispatch(handleRecipeChange(change)),
  handleMakeChange: change => dispatch(handleMakeChange(change)),
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
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Recipe)))
