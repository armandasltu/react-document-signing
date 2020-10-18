import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const NoComments: React.FC = () => (
  <Box p={3} textAlign="center">
    <Typography variant="h2">
      <span role="img" aria-label="No comments">
        🎈
      </span>
    </Typography>
    <Typography variant="h6">No comments yet</Typography>
    <Typography variant="subtitle1">Be the first to add a comment</Typography>
  </Box>
);

export default NoComments;
