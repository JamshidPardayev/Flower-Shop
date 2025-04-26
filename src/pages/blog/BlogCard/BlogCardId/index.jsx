import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';

const BlogId = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://green-shop-backend.onrender.com/api/user/by_id/${id}?access_token=64bebc1e2c6d3f056a8c85b7`);
        const data = await response.json();
        setBlog(data.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
      
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-center mt-10 text-[20px]">Loading...</div>;
  }

  return (
    <div>
        <Navbar />
        <div className="max-w-[800px] mx-auto p-6">
        <h1 className="text-[36px] font-bold mb-4">{blog.name}</h1>
        <p className="text-[18px] text-gray-700">{blog.description}</p>
        {/* Agar blogda rasm bo'lsa */}
        {/* <img src={blog.photo} alt={blog.title} className="w-full h-auto rounded-[10px] mt-6" /> */}
        </div>
    </div>
  );
};

export default BlogId;
