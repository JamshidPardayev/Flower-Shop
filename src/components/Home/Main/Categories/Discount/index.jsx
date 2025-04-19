import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
const api = import.meta.env.VITE_API;

const Discount = () => {
  // const { data, isLoading} = useGetApi('/api/flower/category')

  const getData = async () => {
    const res = await axios.get(`${api}/features/discount?access_token=6506e8bd6ec24be5de357927`);
    return res.data;
  };
  const {data, isLoading, isError} = useQuery({queryKey: ["discount"], queryFn: getData})

  if(isLoading){
    return ( <h3>Loading...</h3> )
  }
  if(isError){
    return ( <h3>Error...</h3> )
  }
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <h3 className="text-[18px] font-bold mb-[10px]">Discount</h3>
      <div className="flex flex-col items-center justify-end max-w-[310px] h-[470px] bg-gray-200 gap-1 p-1">
       {
        <h2 className='text-[48px] text-[#46A358] leading-[40px] text-center'>{data.data.title}</h2>
       }
       {
        <h3 className='text-[20px] my-[6px]'>UP TO {data.data.discoount_up_to}% OFF</h3>
       }
       {
        <div className='h-[370px] max-w-[310px]'>
            <img
               src={data.data.poster_image_url}
               alt="Discount"
               className="object-cover rounded"
             />
        </div>
       }
      </div>
    </div>
  );
};

export default Discount;
