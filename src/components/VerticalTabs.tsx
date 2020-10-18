import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Tabs,
  Tab as TabMui,
  Divider,
  Paper,
  withStyles,
  Button,
  TextField,
  Fab as FabMui,
} from '@material-ui/core';
import Document from '@material-ui/icons/InsertDriveFileOutlined';
import Chat from '@material-ui/icons/ChatBubbleOutline';
import SendMessageIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    maxWidth: 85
  }
}));

const VerticalTabs: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box display="flex">
        <Box flexGrow={1}>
          <TabPanel title={'Overview'} value={value} index={0}>
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
          </TabPanel>
          <TabPanel title={'Comments'} value={value} index={1}>
            <Box p={3} textAlign="center">
              <Typography variant="h2">🎈</Typography>
              <Typography variant="h6">No comments yet</Typography>
              <Typography variant="subtitle1">
                Be the first to add a comment
              </Typography>
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
          </TabPanel>
        </Box>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          <Tab label="Overview" icon={<Document />} />
          <Tab label="Comments" icon={<Chat />} />
        </Tabs>
      </Box>
    </Paper>
  );
};

interface TabPanelProps {
  title: String;
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  title,
  children,
  value,
  index
}) => {
  return value === index ? (
    <Box>
      <Box p={3}>
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
      </Box>
      <Divider />
      {children}
    </Box>
  ) : null;
};

const Tab = withStyles((theme) => ({
  root: {
    minWidth: 80,
    fontSize: 12,
    textTransform: 'inherit'
  },
  selected: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main
  }
}))(TabMui);

const Fab = withStyles({
  root: {
    width: 20,
    height: 20,
    minHeight: 'auto',
    color: 'white'
  }
})(FabMui);

export default VerticalTabs;
