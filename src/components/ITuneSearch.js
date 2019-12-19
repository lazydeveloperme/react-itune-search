import React from 'react';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import Media from './Media';
import SearchForm from './SearchForm';
import { useSelector } from 'react-redux';

function ITuneSearch() {
  const { media, isLoading, error } = useSelector((state) => state.media);

  return (
    <Container maxWidth="lg">
      <SearchForm />
      <Grid container spacing={4}>
        {error ? (
          <Typography variant="h3" color="error.main">
            {error}
          </Typography>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          media && media.map((media) => <Media media={media} />)
        )}
      </Grid>
    </Container>
  );
}

export default ITuneSearch;
