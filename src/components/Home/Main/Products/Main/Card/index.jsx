import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "@fontsource/inter";
import { useSearchParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addDataToShopping } from "../../../../../../redux/shoppingSlice";

const api = import.meta.env.VITE_API;

const MyCard = () => {

  const dispatch = useDispatch();
  const addToCard = (item) => {
    dispatch(addDataToShopping(item))
  }

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "house-plants";
  const type = searchParams.get("type") || "all-plants";
  const sort = searchParams.get("sort") || "default-sorting";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["mycard", category, type, sort],
    queryFn: async ({ queryKey }) => {
      const [_key, category, type, sort] = queryKey;
      const res = await axios.get(
        `${api}/flower/category/${category}?access_token=64bebc1e2c6d3f056a8c85b7&sort=${sort}&type=${type}&range_min=0&range_max=1000`
      );
      return res.data;
    },
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error loading data...</h3>;

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex flex-wrap gap-5 mt-[10px]">
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className="relative group  flex flex-col items-center justify-end bg-gray-200 gap-1 p-1 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-[250px] w-[250px]">
              <img
                src={item.main_image}
                alt={item.title}
                onError={(e) => (e.target.src = "/placeholder.jpg")}
                className="object-cover rounded w-full h-full"
              />
            </div>
            <div className="absolute bottom-[90px]  scale-0  group-hover:scale-100 flex gap-x-3  transition-all duration-300">


              <AiOutlineShoppingCart onClick={() => addToCard(item)} className="p-1.5 h-[30px] w-[30px] rounded-[5px] bg-white cursor-pointer hover:text-gray-700"/>
              
              <FaRegHeart className="p-1.5 h-[30px] w-[30px] rounded-[5px] bg-white cursor-pointer hover:text-gray-700" />
              <IoMdSearch className="p-1.5 h-[30px] w-[30px] rounded-[5px] bg-white cursor-pointer hover:text-gray-700" />
            </div>

            <h2 className="text-[24px] text-[#46A358] font-bold leading-[32px] text-center">
              {item.title}
            </h2>
            <div className="flex gap-x-2">
              <h3 className="text-[16px] text-[#3D3D3D] mt-[10px] font-semibold">
                ${item.discount_price}
              </h3>
              <h3 className="text-[16px] text-[#3D3D3D] mt-[10px] font-semibold line-through">
                ${item.price}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
