import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Media from './Media';
import SearchForm from './SearchForm';

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

function ITuneSearch() {
  return (
    <Container maxWidth="lg">
      <SearchForm />
      <Grid container spacing={4}>
        {numbers.map((number) => <Media key={number} />)}
      </Grid>
    </Container>
  );
}

export default ITuneSearch;
