import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/Styles'
import { updateMake } from '../stores/recipe/makeActions'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const MakeButtons = ({ make, user, updateMake }) => {
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

        <Button >
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
  updateMake: make => dispatch(updateMake(make))
})
export default connect(mapStateToProps, mapDispatchToProps)(MakeButtons)
