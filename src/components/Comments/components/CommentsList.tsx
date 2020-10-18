import { Box } from '@material-ui/core';
import Avatar from '../../Avatar';
import React from 'react';
import { getInitials } from 'utils';
import { CommentData } from 'types';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { makeStyles } from '@material-ui/core/styles';

interface CommentListProps {
  comments: CommentData[];
  onDelete: (id: string) => void;
  onEdit: (comment: CommentData) => void;
}

const useStyles = makeStyles({
  date: {
    opacity: '0.5',
    fontSize: 12
  }
});

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onDelete,
  onEdit
}) => {
  const classes = useStyles();

  return (
    <>
      {comments.map((comment, index) => {
        const { id, name, message, timestamp } = comment;
        const initials = getInitials(name);
        const date = moment(timestamp).format('YYYY-MM-DD HH:MM');

        return (
          <Box display="flex" key={index}>
            <Avatar>{initials}</Avatar>
            <Box
              display="flex"
              flexGrow={1}
              flexDirection="column"
              textAlign="left"
              ml={1}
              mb={2}
              key={index}
            >
              <Box display="flex" justifyContent="space-between">
                <b>{name}</b>
                <div>
                  <IconButton size="small" onClick={() => onEdit(comment)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => onDelete(id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              </Box>
              <div className={classes.date}>{date}</div>
              <div>{message}</div>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default CommentList;
