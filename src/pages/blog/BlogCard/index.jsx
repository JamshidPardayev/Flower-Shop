import React, { useEffect, useState } from 'react';
import '@fontsource/inter';
import { CiSearch } from "react-icons/ci";
import { LuCirclePlus } from "react-icons/lu";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchBlogs = async (search = '') => {
    try {
      const response = await fetch(`https://green-shop-backend.onrender.com/api/user/blog?access_token=64bebc1e2c6d3f056a8c85b7&search=${search}`);
      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    fetchBlogs(); // Dastlabki barcha bloglarni yuklash
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchBlogs(value); 
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className='max-w-[1200px] mx-auto px-[20px] mt-[60px]'>
      <div className='flex flex-col items-center'>
        <h2 className='text-[80px] font-black max-w-[850px] mx-auto text-center leading-[90px] max-md:text-[60px] max-md:leading-[71px] max-sm:text-[40px] max-sm:max-w-[450px] max-sm:leading-[50px]'>
          Monetize your content with <span className='text-[#46A358]'>GreenShop</span>
        </h2>
        <p className='text-[28px] text-center mt-[20px] font-medium max-md:text-[22px] max-sm:text-[16px]'>
          Greenshop - a platform for buying and selling, publishing and monetizing all types of flowers: articles, notes, video, photos, podcasts or songs.
        </p>

        {!isLoggedIn ? (
          <button className='w-[150px] h-[44px] text-[16px] text-white bg-[#46a358] my-[30px] rounded-[6px]'>
            Join Greenshop
          </button>
        ) : (
          <form action="" className='text-center mt-2' onSubmit={(e) => e.preventDefault()}>
            <h2 className='text-black text-[32px] font-bold'>My Feed</h2>
            <div className='flex items-center justify-center mt-2'>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by title..."
                className='border outline-none h-[40px] px-2 rounded-l-[10px] w-[400px] max-sm:w-[300px] hover:border-blue-500 cursor-pointer duration-300'
              />
              <CiSearch className='w-[40px] h-[40px] border p-2 rounded-r-[10px] bg-gray-50 hover:border-blue-500 hover:text-blue-600 duration-300 cursor-pointer' />
            </div>

            <LuCirclePlus className='text-[30px] cursor-pointer mt-4 mx-auto' />
          </form>
        )}
      </div>

      <div className='grid grid-cols-3 gap-6 mt-[40px] max-md:grid-cols-2 max-sm:grid-cols-1'>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className='border p-4 rounded-[10px] shadow-md'>
              <h3 className='text-[22px] font-bold mt-[10px]'>{blog.title}</h3>
              <p className='text-[16px] text-gray-600 mt-[8px]'>{blog.short_description}</p>
            </div>
          ))
        ) : (
          <p className='text-center col-span-3 text-gray-500'>No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;

