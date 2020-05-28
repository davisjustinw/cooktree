import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getConnection } from '../stores/connection/connectionActions'
import { getRecipes } from '../stores/recipe/recipeActions'
import { url } from '../stores/helpers/fetchHelpers'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import Loading from '../shared/Loading'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import RecipeListing from '../recipes/RecipeListing'

class Connection extends Component {
  componentDidMount(){
    this.props.getConnection(this.props.match.params.id)
  }

  render() {
    const { forbidden, connection, recipes, user } = this.props
    const { name, avatarUrl, relationship } = connection

    if(forbidden) {
      return <Redirect to={`/users/${user.id}/connections`} />
    } else if (!name) {
      return <Loading/>
    } else {
      return (
        <>
          <Typography variant='h4' >{name}</Typography>
          <Typography variant='h6'>{relationship}</Typography>
          <Avatar
            alt={name || 'avatar'}
            src={`${url}${avatarUrl}`}
          >
            {!avatarUrl ? <ScatterPlotIcon/> : null}
          </Avatar>
          <Paper >
            <List>
            {
              recipes.map(recipe => (
                <RecipeListing key={recipe.id} recipe={recipe}/>
              ))
            }
            </List>
          </Paper>
        </>
      )
    } // else
  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  getConnection: connectionId => dispatch(getConnection(connectionId)),
  getRecipes: userId => dispatch(getRecipes(userId))
})

const mapStateToProps = ({ connection, recipe, user }) => ({
  forbidden: connection.forbidden,
  connection: connection.current,
  recipes: recipe.list,
  user: user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Connection))
