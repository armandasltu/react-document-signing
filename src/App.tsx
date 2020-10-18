import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import Copyright from './components/Copyright';
import Header from './components/Header';
import PdfPreview from './components/PdfPreview';

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={7}>
            <PdfPreview />
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper>
              <Box m={4} px={2}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Comments
                </Typography>
              </Box>
            </Paper>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
