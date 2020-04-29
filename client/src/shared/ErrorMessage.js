import React from 'react'
import { connect } from 'react-redux'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'

const ErrorMessage = ({messages}) => {
  const classes = useStyles()

  if(messages.length > 0) {
    return (
      <>
        <div className={classes.toolbar}/>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
        >
          {messages[0].message}
        </MuiAlert>
      </>
    )
  } else {
    return null
  }
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

const mapStateToProps = ({ error }) => ({
  messages: error.messages
})

export default connect(mapStateToProps, null)(ErrorMessage)
