import React from 'react'
import '@fontsource/inter';

const BlogCard = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className='max-w-[1200px] mx-auto px-[20px] mt-[60px]'>
        <div className='flex flex-col items-center'>
            <h2 className='text-[80px] font-black max-w-[850px] mx-auto text-center leading-[90px] max-md:text-[60px] max-md:leading-[70px] max-sm:text-[40px] max-sm:max-w-[450px] max-sm:leading-[50px]'>Monetize your content with <span className='text-[#46A358]'>GreenShop</span></h2>
            <p className='text-[28px] text-center mt-[20px] font-medium max-md:text-[22px] max-sm:text-[16px]'>Greenshop - a platform for buying and selling, publishing and monetizing all types of flowers: acrticles, notes, video, photos, podcasts or songs.</p>
            <button className='w-[150px] h-[44px] text-[16px] text-white bg-[#46a358] my-[30px] rounded-[6px] '>Join Greenshop</button>
        </div>
    </div>
  )
}

export default BlogCard