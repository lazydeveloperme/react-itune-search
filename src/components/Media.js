import React from 'react';
import { makeStyles, Card, CardMedia, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
}));

function Media({ media }) {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3} md={2}>
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
      </Card>
    </Grid>
  );
}

export default Media;
