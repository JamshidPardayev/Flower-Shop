import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value} $`;
}

const PriceRange = () => {
    const [value, setValue] = React.useState([0, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div className='max-w-[310px]'>
        <h3 className='text-[18px] font-bold mt-[30px] mb-[15px]'>Price Range</h3>
        <Box sx={{ width: 280, margin: "0 auto"}}>
            <Slider
                getAriaLabel={() => 'Narxni tanlang 0$ dan 1000$ gacha'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={1000}
            />
        </Box>
        <p className='text-[15px] text-[#3D3D3D] mt-[15px]'>Price: <span className='text-[#46A358] font-bold'>${value[0]} - ${value[1]}</span> </p>
        <button className='h-[35px] w-[90px] rounded-[6px] text-white text-[14px] font-bold mt-[15px]  bg-[#46A358] hover:bg-green-700 duration-300'>Filter</button>
    </div>
  )
}

export default PriceRange