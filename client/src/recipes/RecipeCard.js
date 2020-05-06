import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/Styles'
import TextField from '@material-ui/core/TextField'
import { handleMakeChange } from '../stores/recipe/makeActions'
import InputBase from '@material-ui/core/InputBase'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import MakeButtons from './MakeButtons'

const RecipeCard = ({ recipe, make, handleMakeChange }) => {
  const classes = useStyles()

  return (
    <>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.input
        }}
        type='text'
        placeholder='alias...'
        name='alias'
        value={make.alias}
        onChange={handleMakeChange}
      />
      <Card classes={{ root: classes.cardRoot }}>
        <CardContent >
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
        </CardContent>
      </Card>

      <MakeButtons recipe={recipe} make={make}/>

    </>
  )
}

const useStyles = makeStyles(theme => ({
  inputRoot: {
    alignSelf: 'flex-start'
  },
  cardRoot: {
    width: '100%',
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(2),
    '& fieldset': {
      border: 0
    }
  }
}))

const mapDispatchToProps = dispatch => ({
  handleMakeChange: ({ target }) => dispatch(handleMakeChange(target)),
})

export default connect(null, mapDispatchToProps)(RecipeCard)
