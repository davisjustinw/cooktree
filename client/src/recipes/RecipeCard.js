import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { useFormInput } from '../shared/form'

const RecipeCard = () => {
  const content = useFormInput('')
  const classes = useStyles()

  return (
    <>
      <Typography
        variant='subtitle2'
        className={classes.subtitle}
        color='textSecondary'
      >
        Make Alias
      </Typography>

      <TextField
        id='content-field'
        placeholder='start typing...'
        {...content}
        multiline
        fullWidth
        variant="outlined"
      />
    </>
  )
}

const useStyles = makeStyles(theme => ({
  subtitle: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2)
  },
}))

export default RecipeCard
