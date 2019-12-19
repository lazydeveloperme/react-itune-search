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
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@material-ui/core';
import { PermMedia } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBarIcon: {
    marginRight: theme.spacing(2)
  },
  searchGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const cards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

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
        <Grid container spacing={3} alignItems="center" className={classes.searchGrid}>
          <Grid item xs={8} sm={9} lg={10}>
            <TextField label="Search Term" fullWidth />
          </Grid>
          <Grid item xs={4} sm={3} lg={2}>
            <Button variant="contained" color="primary" size="large" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia image="https://source.unsplash.com/random" title="Image title" />
                <CardContent>
                  <Typography component="h2" variant="h5">
                    Heading
                  </Typography>
                  <Typography>This is a media card. You can use this section to describe the content.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default App;
