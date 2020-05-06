import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'

const RecipeHeader = ({ recipe, make, handleMakeChange, handleRecipeChange }) => {
  const classes = useStyles()
  return (
    <>
      <InputBase
        classes={{
          root: classes.nameRoot,
          input: classes.nameInput
        }}
        type='text'
        name='name'
        value={recipe.name}
        onChange={handleRecipeChange}
        placeholder='Recipe Name...'
      />

      <InputBase
        classes={{
          root: classes.aliasRoot,
          input: classes.aliasInput
        }}
        type='text'
        placeholder='alias...'
        name='alias'
        value={make.alias}
        onChange={handleMakeChange}
      />
    </>
  )
}

const useStyles = makeStyles(theme => ({
  aliasRoot: {
    alignSelf: 'flex-start'
  },
  aliasInput: {
    color: theme.palette.text.secondary,
    ...theme.typography.subtitle2,
    '&::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 1,
      ...theme.typography.subtitle2,
    }
  },
  nameRoot: {
    alignSelf: 'flex-start'
  },
  nameInput: {
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
  
}))

export default RecipeHeader
