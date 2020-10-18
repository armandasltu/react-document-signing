import { Avatar as AvatarMui, withStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

const Avatar = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}))(AvatarMui);

export default Avatar;
