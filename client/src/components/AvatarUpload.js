import React, { createRef, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import IconButton from '@material-ui/core/IconButton'

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = createRef()
  }

  showFileUpload = () => {
    console.log('showFileUpload')
    this.fileUpload.current.click();
  }

  render() {
    const { handleFileChange, classes, id, name, file } = this.props
    return (
      <>
        <input
          onChange={handleFileChange}
          ref={this.fileUpload}
          accept="image/*"
          id={id}
          name={name}
          type="file"
          hidden
        />
        <IconButton onClick={this.showFileUpload} >
          <Avatar
            alt={file.name || 'upload avatar'}
            src={file.url}
            className={classes.avatar}
          >
            <ScatterPlotIcon autoFocus/>
          </Avatar>
        </IconButton>
      </>
    )
  }
}

const useStyles = theme => ({
  publishIcon: {
    marginRight: theme.spacing(1)
  },
  avatar: {
    marginTop: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export default withStyles(useStyles)(FileUpload)
