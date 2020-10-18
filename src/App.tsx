import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Copyright from './components/Copyright';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Paper>
          <Box m={4} px={2}>
            <Typography variant="h4" component="h1" gutterBottom>
              Comments
            </Typography>
          </Box>
        </Paper>
        <Copyright />
      </Container>
    </>
  );
}
