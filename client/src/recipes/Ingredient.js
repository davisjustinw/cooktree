import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Ingredient = ({amount, name}) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={name} secondary={amount}/>
      </ListItem>
    </>
  )
}

export default Ingredient
