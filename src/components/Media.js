import React from 'react';
import { makeStyles, Button, Card, CardMedia, CardContent, CardActions, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
}));

function Media({ media }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia image={media.artworkUrl100} title="Image title" className={classes.cardMedia} />
        <CardContent>
          <Typography component="h2" variant="h5">
            {media.artistName}
          </Typography>
          <Typography>
            {media.collectionName} - {media.trackName}
          </Typography>
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
