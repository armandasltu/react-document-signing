import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';

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

export default TabPanel;
