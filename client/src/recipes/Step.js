import React from 'react'
import { makeStyles } from '@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import Ingredient from './Ingredient'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

const Step = () => {
  const classes = useStyles()
  return (
    <>
      <Card variant='outlined' >
        <CardContent >
          <Typography
          variant='subtitle2'
          color='textSecondary'
          >
          Step 1
          </Typography>
          <Typography variant='body1' >
          Mix well in a bowl.  Whisks work well. But use anything that incorporates the molasses well.
          </Typography>
          <List>
            <Ingredient amount='3 Tbs'name='cider vinegar'/>
            <Ingredient amount='2 Tbs'name='molasses'/>
            <Ingredient amount='1/4 tsp' name='liquid smoke'/>
          </List>

          <Divider/>
          <List>
            <Ingredient amount='' name='liquid ingredients'/>
          </List>
        </CardContent >
      </Card>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  sectionSubtitle: {
    marginTop: theme.spacing(2)
  }
}))

export default Step
