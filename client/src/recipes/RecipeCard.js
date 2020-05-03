import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/Styles'
import TextField from '@material-ui/core/TextField'
import { handleMakeChange } from '../stores/recipe/makeActions'
import InputBase from '@material-ui/core/InputBase'

import MakeButtons from './MakeButtons'

const RecipeCard = ({ make, handleMakeChange }) => {
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
        name='alias'
        value={make.alias}
        onChange={handleMakeChange}
      />

      <TextField
        classes={{
          root: classes.content
        }}
        id='content-field'
        placeholder='start typing...'
        name='content'
        value={make.content}
        onChange={handleMakeChange}
        multiline
        rows='10'
        rowsMax='100'
        fullWidth
        variant="outlined"
      />
      <MakeButtons make={make}/>

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
    '&::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 1,
      ...theme.typography.subtitle2,
    }
  },
  content: {
    marginTop: theme.spacing(2)
  }
}))

const mapDispatchToProps = dispatch => ({
  handleMakeChange: ({ target }) => dispatch(handleMakeChange(target)),
})

export default connect(null, mapDispatchToProps)(RecipeCard)
