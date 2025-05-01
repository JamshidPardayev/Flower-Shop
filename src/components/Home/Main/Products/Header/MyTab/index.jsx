import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';

const MyTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentType = searchParams.get("type") || "all-plants";

  const updateType = (type) => {
    searchParams.set("type", type);
    setSearchParams(searchParams);
  };

  const handleChange = (event, newValue) => {
    updateType(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={currentType}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="all-plants" label="All Plants" />
        <Tab value="new-arrivals" label="New Arrivals" />
        <Tab value="sale" label="Sale" />
      </Tabs>
    </Box>
  );
};

export default MyTab;
