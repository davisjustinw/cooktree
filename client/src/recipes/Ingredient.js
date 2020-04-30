import React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Ingredient = ({amount, name}) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={`${amount}: ${name}`}/>
      </ListItem>
    </>
  )
}

export default Ingredient
