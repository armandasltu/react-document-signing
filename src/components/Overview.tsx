import React from 'react';
import { Box, Button } from '@material-ui/core';

const Overview: React.FC = () => (
  <Box px={3} pb={3}>
    <p>
      <b>Document owner</b>
      <br />
      Vardenis Pavardenis
    </p>
    <p>
      <b>Creation date</b>
      <br />
      2020.03.10 12:00
    </p>
    <p>
      <b>Deadline</b>
      <br />
      2020.03.21 14:00
    </p>
    <Button variant="contained" color="primary" fullWidth>
      Show all participants
    </Button>
  </Box>
);

export default Overview;
