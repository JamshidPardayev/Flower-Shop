import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const MyTab = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
     <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="All Plants" />
        <Tab value="two" label="New Arrivals" />
        <Tab value="three" label="Sale" />
      </Tabs>
    </Box>
    </div>
  )
}

export default MyTab;
