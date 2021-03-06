import React, { createRef, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import IconButton from '@material-ui/core/IconButton'

class AvatarUpload extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = createRef()
  }

  showFileUpload = () => {
    console.log('showFileUpload')
    this.fileUpload.current.click();
  }

  handleFileChange = ({ target }) => {
    const { handleChange } = this.props
    // conditional protects against user canceling
    if(target.files[0]) {
      const file = target.files[0]
      const file_url = URL.createObjectURL(file)
      handleChange({ target: { name: 'avatarFile', value: file }})
      handleChange({ target: { name: 'avatarUrl', value: file_url }})
    }
  }

  render() {
    const { classes, avatarUrl } = this.props
    return (
      <>
        <input
          onChange={this.handleFileChange}
          ref={this.fileUpload}
          accept="image/*"
          id='avatarFile'
          name='avatarFile'
          type="file"
          hidden
        />
        <IconButton onClick={this.showFileUpload} >
          <Avatar
            alt='avatar image'
            src={avatarUrl}
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

export default withStyles(useStyles)(AvatarUpload)
