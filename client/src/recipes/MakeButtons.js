import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/Styles'
import { updateMake, addNewMake } from '../stores/recipe/makeActions'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const MakeButtons = ({ recipeId, make, user, updateMake, addNewMake }) => {
  const classes = useStyles()

  return (
    <>
      <ButtonGroup
        color='primary'
        variant='contained'
        classes={{ root: classes.buttonGroup }}
      >

        <Button
          onClick={() => updateMake(make)}
          disabled={make.cook.id !== user.id}
        >
          Update
        </Button >

        <Button
          onClick={() => addNewMake(recipeId, make)}
        >
          Make New
        </Button >
      </ButtonGroup>

    </>
  )
}

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    marginTop: theme.spacing(2)
  }
}))
const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = dispatch => ({
  updateMake: make => dispatch(updateMake(make)),
  addNewMake: (recipeId, make) => dispatch(addNewMake(recipeId, make))
})
export default connect(mapStateToProps, mapDispatchToProps)(MakeButtons)
