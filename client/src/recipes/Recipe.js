import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRecipe } from '../stores/recipe/recipeActions'
import { withStyles } from '@material-ui/core/styles'

import Loading from '../shared/Loading'
import RecipeCard from './RecipeCard'
import InputBase from '@material-ui/core/InputBase'

class Recipe extends Component {

  componentDidMount(){
    console.log('recipe mounting')
    this.props.getRecipe(this.props.match.params.id)
  }

  render() {
    const { name, classes } = this.props
    console.log(classes)
    if(!name){
      return <Loading/>
    } else {
      return (
        <>
          <div className={classes.paper}>
          <InputBase
            classes={{
              root: classes.root,
              input: classes.input
            }}
            type='text'
            value={name}
            placeholder='Recipe Name...'
          />
          <RecipeCard />
          </div>
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
