import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "@fontsource/inter";
import { useSearchParams } from "react-router-dom";

const api = import.meta.env.VITE_API;

const MyCard = () => {
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
            className="flex flex-col items-center justify-end bg-gray-200 gap-1 p-1 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-[250px] w-[250px]">
              <img
                src={item.main_image}
                alt={item.title}
                onError={(e) => (e.target.src = "/placeholder.jpg")}
                className="object-cover rounded w-full h-full"
              />
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
