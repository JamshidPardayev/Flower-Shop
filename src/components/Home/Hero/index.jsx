import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay  } from 'swiper/modules';
import '@fontsource/inter';

const Hero = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className='min-h-[450px] max-w-[1200px] mx-auto p-[20px] bg-[#F5F5F580] content-end mt-[12px] mb-[50px]'>
       <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-[16px] text-[#3D3D3D] font-medium uppercase tracking-[3px]'>Welcome to GreenShop</h3>
              <h2 className='text-[70px] font-black uppercase max-w-[575px] leading-[70px] my-[10px] text-[#3D3D3D] max-md:text-[42px] max-md:leading-[45px] max-sm:text-[24px] max-sm:leading-[25px]'>Let’s Make a Better <span className='text-[#46A358]'>Planet</span></h2>
              <p className='text-[#727272] max-w-[557px] text-[14px]'>We are an online plant shop offering a wide range of cheap and trendy plants. <span className='max-md:hidden'>Use our plants to create an unique Urban Jungle. Order your favorite plants!</span></p>
              <button className='w-[150px] h-[40px] text-[16px] font-bold text-white rounded-[6px] bg-[#46A358] mt-[44px] hover:bg-green-700 duration-300'>SHOP NOW</button>
            </div>
            <div>
              <img src="/image/hero-flower-1.png" alt="heroImg" />
            </div>
          </div>
        </SwiperSlide> <br /> <br />

        <SwiperSlide>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-[16px] text-[#3D3D3D] font-medium uppercase tracking-[3px]'>Welcome to GreenShop</h3>
              <h2 className='text-[70px] font-black uppercase max-w-[575px] leading-[70px] my-[10px] text-[#3D3D3D] max-md:text-[42px] max-md:leading-[45px] max-sm:text-[24px] max-sm:leading-[25px]'>Let’s Live a Better <span className='text-[#46A358]'>Planet</span></h2>
              <p className='text-[#727272] max-w-[557px] text-[14px]'>We are an online plant shop offering a wide range of cheap and trendy plants. <span className='max-md:hidden'>Use our plants to create an unique Urban Jungle. Order your favorite plants!</span></p>
              <button className='w-[150px] h-[40px] text-[16px] font-bold text-white rounded-[6px] bg-[#46A358] mt-[44px] hover:bg-green-700 duration-300'>LET'S START</button>
            </div>
            <div>
              <img src="/image/hero-flower-2.png" alt="heroImg" />
            </div>
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-[16px] text-[#3D3D3D] font-medium uppercase tracking-[3px]'>Welcome to GreenShop</h3>
              <h2 className='text-[70px] font-black uppercase max-w-[600px] leading-[70px] my-[10px] text-[#3D3D3D] max-md:text-[42px] max-md:leading-[45px] max-sm:text-[24px] max-sm:leading-[25px]'>Let’s Observe a Better <span className='text-[#46A358]'>Planet</span></h2>
              <p className='text-[#727272] max-w-[557px] text-[14px]'>We are an online plant shop offering a wide range of cheap and trendy plants. <span className='max-md:hidden'>Use our plants to create an unique Urban Jungle. Order your favorite plants!</span></p>
              <button className='w-[150px] h-[40px] text-[16px] font-bold text-white rounded-[6px] bg-[#46A358] mt-[44px] hover:bg-green-700 duration-300'>GET CREDITS</button>
            </div>
            <div>
              <img src="/image/hero-flower-3.png" alt="heroImg" />
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
      
    </div>
  )
}

export default Hero