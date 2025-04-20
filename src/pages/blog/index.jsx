import React from 'react'
import Navbar from '../../components/Navbar'
import BlogCard from './BlogCard'
import BlogImg from './blogImg'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogImg />
      <BlogCard />
    </div>
  )
}

export default Blog