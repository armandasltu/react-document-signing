import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Box,
  Divider,
  Fab as FabMui,
  TextField,
  withStyles
} from '@material-ui/core';
import SendMessageIcon from '@material-ui/icons/ArrowUpward';

const Comments: React.FC = () => (
  <>
    <Box p={3} textAlign="center">
      <Typography variant="h2">🎈</Typography>
      <Typography variant="h6">No comments yet</Typography>
      <Typography variant="subtitle1">Be the first to add a comment</Typography>
    </Box>
    <Divider />
    <Box p={3} display="flex">
      <TextField
        label="Type comment"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Box ml={2} my="auto">
        <Fab color="primary" size="small">
          <SendMessageIcon style={{ fontSize: 16 }} />
        </Fab>
      </Box>
    </Box>
  </>
);

const Fab = withStyles({
  root: {
    width: 20,
    height: 20,
    minHeight: 'auto',
    color: 'white'
  }
})(FabMui);

export default Comments;
