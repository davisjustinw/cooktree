import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRecipe } from '../stores/recipe/recipeActions'
import { withStyles } from '@material-ui/core/styles'
import { handleRecipeChange } from '../stores/recipe/recipeActions'
import { handleMakeChange } from '../stores/make/makeActions'
import { handleMemoryChange } from '../stores/memory/memoryActions'
import { changeHandler } from '../shared/form'

import RecipeHeader from './RecipeHeader'
import RecipeCard from './RecipeCard'
import Memories from './Memories'
import MemoryNew from './MemoryNew'

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

  handleMemoryChange = ({ target }) => {
    this.props.handleMemoryChange({ name: target.name, value: target.value })
  }

  handleChange = changeHandler.bind(this)

  render() {
    const { recipe, make, memory, classes, memories, showNewMemory } = this.props

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

          {
            showNewMemory ? (
              <MemoryNew
                make={make}
                memory={memory}
                handleMemoryChange={this.handleMemoryChange}
              />
            ) : (
              <Memories memories={memories} />
            )
          }
          </div>
        </>
      )
  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  getRecipe: recipeId => dispatch(getRecipe(recipeId)),
  handleRecipeChange: change => dispatch(handleRecipeChange(change)),
  handleMakeChange: change => dispatch(handleMakeChange(change)),
  handleMemoryChange: change => dispatch(handleMemoryChange(change)),
})

const mapStateToProps = ({ recipe, make, memory, ui }) => ({
  recipe: recipe.current,
  make: make.current,
  memories: memory.list,
  memory: memory.current,
  showNewMemory: ui.showNewMemory
})

const useStyles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Recipe)))
