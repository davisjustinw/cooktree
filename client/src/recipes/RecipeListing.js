import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const RecipeListing = ({ recipe }) => {

  return (
    <ListItem
      key={recipe.id}
      button
      component={RouterLink}
      to={`/recipes/${recipe.id}`}
    >
      <ListItemText primary={recipe.name} />
    </ListItem>
  )
}

export default RecipeListing
