import React from 'react';
import { Container, Grid, Typography, Box, CircularProgress } from '@material-ui/core';
import Media from './Media';
import SearchForm from './SearchForm';
import { useSelector } from 'react-redux';

function ITuneSearch() {
  const { media, isRequested, isLoading, error } = useSelector((state) => state.media);

  return (
    <Container maxWidth="lg">
      <SearchForm />
      {media.length ? (
        <Grid container spacing={3}>
          {media.map((media) => <Media key={media.trackId} media={media} />)}
        </Grid>
      ) : (
        <Box mt={3} display="flex" justifyContent="center">
          {isLoading ? (
            <CircularProgress />
          ) : error ? (
            <Typography variant="h5" color="secondary">
              {error}
            </Typography>
          ) : isRequested ? (
            <Typography variant="h5">No result found</Typography>
          ) : (
            <Typography variant="h5" color="primary">
              Enter keyword and click search
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
}

export default ITuneSearch;
