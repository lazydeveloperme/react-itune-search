import React, { Fragment } from 'react';
import { Toolbar, CssBaseline, AppBar, Typography } from '@material-ui/core';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">React iTune Search</Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default App;
