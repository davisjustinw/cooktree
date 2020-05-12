import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'

const NewRecipeHeader = ({ recipe, make, handleMakeChange, handleRecipeChange }) => {
  const classes = useStyles()

    return (
      <div className={classes.header}>
        <div className={classes.captions}>
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
          <Typography variant='caption' color='textSecondary'>
            {make.cook.name}, {make.updatedAt}
          </Typography>
        </div>
      </div>
    )

}

const useStyles = makeStyles(theme => ({

  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  captions: {
    display: 'flex',
    flexDirection: 'column'
  },
  aliasRoot: {
    alignSelf: 'flex-start'
  },
  aliasInput: {
    color: theme.palette.text.secondary,
    ...theme.typography.subtitle2,
    paddingBottom: theme.spacing(0),
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

export default NewRecipeHeader
