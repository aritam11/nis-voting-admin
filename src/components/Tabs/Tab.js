import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Party from "../../pages/Parties/Party";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function MultiTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Parties"  />
          <Tab label="Canditates"  />
          <Tab label="Info" />
          <Tab label="Control Panel"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Party/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Candidate/> */}Item 1
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
    </Box>
  );
}