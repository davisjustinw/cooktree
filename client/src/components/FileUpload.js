import React, { createRef, Component } from 'react'
import PublishIcon from '@material-ui/icons/Publish'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
    const { handleFileChange, classes, className, id, name, file } = this.props
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

        <Button
          onClick={this.showFileUpload}
          variant="contained"
          color="primary"
          fullWidth
          className={className}
        >
          <PublishIcon className={classes.publishIcon}/>
          { file.name || `Upload ${name}` }
        </Button>
      </>
    )
  }
}

const useStyles = theme => ({
  publishIcon: {
    marginRight: theme.spacing(1)
  }
});

export default withStyles(useStyles)(FileUpload)
