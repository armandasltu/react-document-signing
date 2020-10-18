import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab as FabMui,
  TextField,
  withStyles
} from '@material-ui/core';
import SendMessageIcon from '@material-ui/icons/ArrowUpward';
import CommentList from './components/CommentsList';
import { CommentData } from 'types';
import { v4 as uuid } from 'uuid';
import NoComments from './components/NoComments';

const Comments: React.FC = () => {
  const initialComments = JSON.parse(localStorage.getItem('comments') ?? '');
  const [comments, setComments] = useState<CommentData[]>(initialComments);
  const [commentMessage, setCommentMessage] = useState<string>('');
  const name = 'Vardenis Pavardenis';

  const [
    editableComment,
    setEditableComment
  ] = React.useState<CommentData | null>(null);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments, editableComment]);

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

  const onCommentDelete = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const onCommentEdit = () => {
    if (editableComment) {
      const commentIndex = comments.findIndex(
        ({ id }) => id === editableComment.id
      );
      if (commentIndex !== -1) {
        const commentsList = comments;
        commentsList.splice(commentIndex, 1, editableComment);
        setComments(commentsList);
      }
      setEditableComment(null);
    }
  };

  return (
    <>
      <Box p={3} textAlign="center">
        {comments.length ? (
          <CommentList
            comments={comments}
            onDelete={onCommentDelete}
            onEdit={(comment: CommentData) => setEditableComment(comment)}
          />
        ) : (
          <NoComments />
        )}
      </Box>
      <Divider />
      <Box p={3} display="flex">
        <TextField
          value={commentMessage}
          onChange={({ target }: React.ChangeEvent<any>) => {
            setCommentMessage(target.value);
          }}
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

      <Dialog open={!!editableComment} onClose={() => setEditableComment(null)}>
        <DialogTitle>Edit message</DialogTitle>
        <DialogContent>
          <TextField
            value={editableComment?.message ?? ''}
            onChange={({ target }) =>
              setEditableComment({
                ...editableComment,
                message: target.value
              } as CommentData)
            }
            autoFocus
            margin="dense"
            label="Message"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditableComment(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={onCommentEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
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
