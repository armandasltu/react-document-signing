import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Box,
  Divider,
  Fab as FabMui,
  TextField,
  withStyles
} from '@material-ui/core';
import SendMessageIcon from '@material-ui/icons/ArrowUpward';
import CommentList from './components/CommentsList';
import { CommentData } from 'types';
import { v4 as uuid } from 'uuid';

const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [commentMessage, setCommentMessage] = useState<string>('');
  const name = 'Vardenis Pavardenis';

  useEffect(() => {
    if (comments.length) {
      console.log('UPD');
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  useEffect(() => {
    const commentsStorage = localStorage.getItem('comments');
    commentsStorage && setComments(JSON.parse(commentsStorage) ?? []);
  }, []);

  const onCommentSubmit = () => {
    if (commentMessage) {
      setComments([
        ...comments,
        {
          id: uuid(),
          name,
          message: commentMessage,
          timestamp: new Date()
        } as CommentData
      ]);
      setCommentMessage('');
    }
  };

  const handleCommentChange = ({ target }: React.ChangeEvent<any>) => {
    setCommentMessage(target.value);
  };

  const NoComments = () => (
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

  const onCommentDelete = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      <Box p={3} textAlign="center">
        {comments.length ? (
          <CommentList comments={comments} onDelete={onCommentDelete} />
        ) : (
          <NoComments />
        )}
      </Box>
      <Divider />
      <Box p={3} display="flex">
        <TextField
          value={commentMessage}
          onChange={handleCommentChange}
          label="Type comment"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Box ml={2} my="auto">
          <Fab color="primary" size="small" onClick={onCommentSubmit}>
            <SendMessageIcon style={{ fontSize: 16 }} />
          </Fab>
        </Box>
      </Box>
    </>
  );
};

const Fab = withStyles({
  root: {
    width: 20,
    height: 20,
    minHeight: 'auto',
    color: 'white'
  }
})(FabMui);

export default Comments;
