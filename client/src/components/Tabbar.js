import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const TabBar = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Connections" value='/connections' component={RouterLink} to="/connections" />
        <Tab label="Recipes" value='/recipes' component={RouterLink} to="/recipes" />
      </Tabs>
    </Paper>
  );
}

export default withRouter(TabBar)
