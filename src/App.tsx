import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Copyright from './components/Copyright';
import Header from './components/Header';
import PdfPreview from './components/PdfPreview';
import VerticalTabs from './components/VerticalTabs';

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
            <Box my={4}>
              <VerticalTabs />
            </Box>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
