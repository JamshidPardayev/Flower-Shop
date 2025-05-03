import React from 'react';
import Navbar from '../../components/Navbar';
import BlogCard from './BlogCard';
import BlogImg from './BlogImg';
import AddUser from './AddUser/page';
// import BlogId from './BlogCard/BlogCardId';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogImg />
      {/* <AddUser/> */}
      <BlogCard />
      {/* <BlogId /> */}
    </div>
  );
};

export default Blog;
