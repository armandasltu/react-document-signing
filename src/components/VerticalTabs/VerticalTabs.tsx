import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Tabs, Tab as TabMui, Paper, withStyles } from '@material-ui/core';
import Document from '@material-ui/icons/InsertDriveFileOutlined';
import Chat from '@material-ui/icons/ChatBubbleOutline';
import Comments from '../Comments';
import Overview from '../Overview';
import TabPanel from './components/TabPanel';

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
            <Overview />
          </TabPanel>
          <TabPanel title={'Comments'} value={value} index={1}>
            <Comments />
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

export default VerticalTabs;
