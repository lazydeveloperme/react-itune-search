import React, { Fragment } from 'react';
import { Toolbar, CssBaseline, AppBar, Typography, makeStyles } from '@material-ui/core';
import { PermMedia } from '@material-ui/icons';
import ITuneSearch from './components/ITuneSearch';

const useStyles = makeStyles((theme) => ({
  appBarIcon: {
    marginRight: theme.spacing(2)
  },
  searchGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PermMedia className={classes.appBarIcon} />
          <Typography variant="h6">React iTune Search</Typography>
        </Toolbar>
      </AppBar>
      <ITuneSearch />
    </Fragment>
  );
}

export default App;
