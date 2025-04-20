import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import '@fontsource/inter';

const api = import.meta.env.VITE_API;

const MyCard = () => {
  const getData = async () => {
    const res = await axios.get(`${api}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7&sort=most-expensive&type=all-plants&range_min=0&range_max=1000`);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({ queryKey: ['mycard'], queryFn: getData });

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error loading data...</h3>;


  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>

      <div className="flex flex-wrap gap-5 mt-[10px]">
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-end bg-gray-200 gap-1 p-1 rounded shadow-md"
          >
            <div className="h-[250px] w-[250px]">
              <img
                src={item.main_image}
                className="object-cover rounded w-full h-full"
              />
            </div>
            <h2 className="text-[24px] text-[#46A358] font-bold leading-[32px] text-center">
              {item.title}
            </h2>
            <div className='flex gap-x-2'>
            <h3 className="text-[16px] text-[#3D3D3D] mt-[10px] font-semibold">${item.discount_price}</h3>
            <h3 className="text-[16px] text-[#3D3D3D] mt-[10px] font-semibold line-through">${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
