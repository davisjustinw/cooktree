import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/Styles'
import { handleMakeChange, updateMakeList } from '../stores/recipe/makeActions'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const MakeButtons = ({ make, user, updateMakeList }) => {
  const classes = useStyles()
  return (
    <>
      <ButtonGroup classes={{ root: classes.buttonGroup }} >

        <Button
          onClick={() => updateMakeList(make)}
          disabled={make.cookId !== user.id}
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
  updateMakeList: make => dispatch(updateMakeList(make))
})
export default connect(mapStateToProps, mapDispatchToProps)(MakeButtons)
