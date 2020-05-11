import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const RecipeListing = ({ recipe }) => {

  const match = useRouteMatch('/users/:id')

  return (
    <ListItem
      key={recipe.id}
      button
      component={RouterLink}
      to={`${match.url}/recipes/${recipe.id}`}
    >
      <ListItemText primary={recipe.name} />
    </ListItem>
  )
}

export default RecipeListing
