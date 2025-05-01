import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectSort = searchParams.get("sort") || "";

  const updateSort = (sortType) => {
    searchParams.set("sort", sortType);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2 max-lg:hidden">
        <p>Sort by: </p>
        <select
          className="border p-2 outline-none rounded-[5px]"
          value={selectSort}
          onChange={(e) => updateSort(e.target.value)}
        >
          <option value="">Default Sorting</option>
          <option value="the-cheapest">The Cheapest</option>
          <option value="most-expensive">Most Expensive</option>
        </select>
      </div>
      <div>
        <IoMdMenu className="hidden max-lg:block text-[30px] text-[#3D3D3D] hover:text-black duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sort;
