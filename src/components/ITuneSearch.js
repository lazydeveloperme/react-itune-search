import React from 'react';
import { Container, Grid, Typography, Box, CircularProgress } from '@material-ui/core';
import Media from './Media';
import SearchForm from './SearchForm';
import { useSelector } from 'react-redux';

function ITuneSearch() {
  const { media, isLoading, error } = useSelector((state) => state.media);

  return (
    <Container maxWidth="lg">
      <SearchForm />
      {error ? (
        <Typography variant="h3" color="error.main">
          {error}
        </Typography>
      ) : isLoading ? (
        <Box mt={5} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        media && (
          <Grid container spacing={4}>
            {media.map((media) => <Media key={media.trackId} media={media} />)}
          </Grid>
        )
      )}
    </Container>
  );
}

export default ITuneSearch;
