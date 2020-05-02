import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import TextField from '@material-ui/core/TextField'
import { useFormInput } from '../shared/form'
import InputBase from '@material-ui/core/InputBase'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'


const RecipeCard = () => {
  const content = useFormInput('')
  const alias = useFormInput('')
  const classes = useStyles()

  return (
    <>
      <InputBase
        classes={{
          root: classes.root,
          input: classes.input
        }}
        type='text'
        placeholder='alias...'
        {...alias}
      />

      <TextField
        classes={{
          root: classes.content
        }}
        id='content-field'
        placeholder='start typing...'
        {...content}
        multiline
        rows='10'
        rowsMax='100'
        fullWidth
        variant="outlined"
      />
      <ButtonGroup
        classes={{
          root: classes.buttonGroup
        }}
      >
        <Button >
          Update
        </Button >
        <Button >
          Make New
        </Button >
      </ButtonGroup>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: 'flex-start'
  },
  input: {
    color: theme.palette.text.secondary,
    ...theme.typography.subtitle2,
    '&::placeholder':{
      color: theme.palette.text.secondary,
      opacity: 1,
      ...theme.typography.subtitle2
    }
  },
  content: {
    marginTop: theme.spacing(2)
  },
  buttonGroup: {
    marginTop: theme.spacing(2)
  }
}))

export default RecipeCard
