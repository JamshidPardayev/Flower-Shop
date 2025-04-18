import axios from "axios";
import React, { useEffect, useState } from "react";

const api = import.meta.env.VITE_API;

const Category = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
    `${api}/flower/category?access_token=6506e8bd6ec24be5de357927`
    );
    setData(res?.data?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h3>Category</h3>
      <div>sdhsjdg</div>
    </div>
  );
};

export default Category;