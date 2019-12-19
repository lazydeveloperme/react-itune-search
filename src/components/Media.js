import React from 'react';
import { makeStyles, Button, Card, CardMedia, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
}));

function Media() {
  const classes = useStyles();
  const { media, isLoading, error } = useSelector((state) => state.media);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia image="https://source.unsplash.com/random" title="Image title" className={classes.cardMedia} />
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
  );
}

export default Media;
