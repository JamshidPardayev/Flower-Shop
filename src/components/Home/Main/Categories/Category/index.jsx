import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const api = import.meta.env.VITE_API;
import "@fontsource/inter";
import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const updateCategory = (categoryType) => {
    searchParams.set("category", categoryType);
    setSearchParams(searchParams);
  };


  const getData = async () => {
    const res = await axios.get(
      `${api}/flower/category?access_token=6506e8bd6ec24be5de357927`
    );
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getData,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error...</h3>;

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <h3 className="text-[18px] font-bold mb-[10px]">Categories</h3>
      <div>
        {data?.data?.map(({ title, route_path, count, _id }) => {
          const isActive = selectedCategory === route_path;

          return (
            <div
              key={_id}
              onClick={() => updateCategory(route_path)}
              className={`flex justify-between items-center max-w-[310px] text-[15px] mb-3 cursor-pointer
                ${isActive ? "text-[#46a358] font-semibold" : "text-[#3D3D3D]"}
                hover:text-[#46a358] transition-colors duration-200
              `}
            >
              <h2>{title}</h2>
              <h3>({count})</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
