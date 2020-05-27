import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { url } from '../stores/helpers/fetchHelpers'
import Avatar from '@material-ui/core/Avatar'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'

const RecipeHeader = ({ recipe, make, handleMakeChange, handleRecipeChange }) => {
  const classes = useStyles()
  if (make.cook.avatarUrl){

    return (
      <div className={classes.header}>
        <Avatar
          alt='cook'
          src={`${url}${make.cook.avatarUrl}`}
          className={classes.avatar}
        />
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
  } else {
    return null
  }

}

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    alignSelf: 'center'
  },
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

export default RecipeHeader
