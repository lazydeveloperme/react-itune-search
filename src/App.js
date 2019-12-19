import React, { Fragment } from 'react';
import {
  Toolbar,
  CssBaseline,
  AppBar,
  Typography,
  makeStyles,
  Container,
  Grid,
  TextField,
  Button,
  Box
} from '@material-ui/core';
import { PermMedia } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBarIcon: {
    marginRight: theme.spacing(2)
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
      <Container maxWidth="lg">
        <Box mt={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={8} sm={9} lg={10}>
              <TextField label="Search Term" fullWidth />
            </Grid>
            <Grid item xs={4} sm={3} lg={2}>
              <Button variant="contained" color="primary" size="large" fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
