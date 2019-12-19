import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Grid, Box } from '@material-ui/core';

function SearchForm() {
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (values) => {
      alert(values.search);
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} mt={3} mb={3}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={8} sm={9} lg={10}>
          <TextField name="search" inputProps={formik.getFieldProps('search')} label="Search Term" fullWidth />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchForm;
