import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  AppBar as AppBarMui,
  Avatar,
  Divider as DividerMui,
  IconButton,
  Toolbar,
  withStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          className={classes.menuButton}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="subtitle1"
          color="textPrimary"
          className={classes.title}
        >
          EULA Free Font License Ver. 2.0
        </Typography>
        <Avatar>AM</Avatar>
        <Divider orientation="vertical" flexItem />
        <Button variant="outlined">Decline</Button>
        <Box ml={1} />
        <Button variant="contained" color="primary">
          Sign document
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const AppBar = withStyles((theme) => ({
  root: {
    background: theme.palette.background.paper
  }
}))(AppBarMui);

const Divider = withStyles((theme) => ({
  root: {
    height: 32,
    margin: 'auto 16px'
  }
}))(DividerMui);

export default Header;
