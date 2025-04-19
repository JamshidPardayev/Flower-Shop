import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const api = import.meta.env.VITE_API;
import '@fontsource/inter';

const Category = () => {

  const getData = async () => {
    const res = await axios.get(`${api}/flower/category?access_token=6506e8bd6ec24be5de357927`);
    return res.data;
  };


  const {data, isLoading, isError} = useQuery({queryKey: ["categories"], queryFn: getData})

  if(isLoading){
    <h3>Loading...</h3>
  }
  if(isError){
    <h3>Error...</h3>
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} >
      <h3 className="text-[18px] font-bold mb-[10px]">Categories</h3>
      <div>
        {data?.data?.map(({ title, count }) => (
          <div className="flex justify-between max-w-[310px] text-[15px] text-[#3D3D3D] mb-3">
            <h2>{title}</h2>
            <h3>({count})</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;