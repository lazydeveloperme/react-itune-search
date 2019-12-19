import React from 'react';
import { useFormik } from 'formik';
import {
  makeStyles,
  Container,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
}));

const cards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

function ITuneSearch() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (values) => {
      alert(values.search);
    }
  });

  return (
    <Container maxWidth="lg">
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
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
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
        ))}
      </Grid>
    </Container>
  );
}

export default ITuneSearch;
