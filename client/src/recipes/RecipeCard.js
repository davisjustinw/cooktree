import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import MakeButtons from './MakeButtons'

const RecipeCard = ({ recipe, make, handleMakeChange }) => {
  const classes = useStyles()

  return (
    <>
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
  cardRoot: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(2),
    '& fieldset': {
      border: 0
    }
  }
}))

export default RecipeCard
