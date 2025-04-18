import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube    } from "react-icons/fa";


const FooterInfo = () => {
  return (
    <div className='flex max-w-[1200px] px-[20px] mx-auto justify-between py-[32px] bg-[#FBFBFB] max-sm:flex-col max-sm:text-center'>
      <div>
        <h2 className='text-[#3D3D3D] text-[18px] font-bold'>My Account</h2>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>My Account</p>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>Address</p>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>Wishlist</p>
      </div>

      <div>
        <h2 className='text-[#3D3D3D] text-[18px] font-bold'>Categories</h2>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>House Plants</p>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>Potter Plants</p>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>Seeds</p>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>Small Plants</p>
        <p className='text-[14px] text-[#3D3D3D] mt-[8px]'>Accessories</p>
      </div>

      <div>
        <h2 className='text-[#3D3D3D] text-[18px] font-bold'>Social Media</h2>
        <div className='flex gap-[10px] mt-[20px] max-sm:justify-center'>
          <p className='w-[30px] h-[30px] rounded-[4px] border border-[#46A35899] text-[#46A35899] flex items-center justify-center hover:text-green-600 hover:border-green-600 duration-300'><FaFacebookF /></p>
          <p className='w-[30px] h-[30px] rounded-[4px] border border-[#46A35899] text-[#46A35899] flex items-center justify-center hover:text-green-600 hover:border-green-600 duration-300'><FaInstagram /></p>
          <p className='w-[30px] h-[30px] rounded-[4px] border border-[#46A35899] text-[#46A35899] flex items-center justify-center hover:text-green-600 hover:border-green-600 duration-300'><FaTwitter  /></p>
          <p className='w-[30px] h-[30px] rounded-[4px] border border-[#46A35899] text-[#46A35899] flex items-center justify-center hover:text-green-600 hover:border-green-600 duration-300'><FaLinkedinIn   /></p>
          <p className='w-[30px] h-[30px] rounded-[4px] border border-[#46A35899] text-[#46A35899] flex items-center justify-center hover:text-green-600 hover:border-green-600 duration-300'><FaYoutube   /></p>
        </div>
        <h2 className='text-[#3D3D3D] text-[18px] font-bold mt-[33px] mb-[13px]'>We accept</h2>
        <img src="/image/payload_img.svg" alt="payload" className='max-sm:mx-auto'/>
      </div>
    </div>
  )
}

export default FooterInfo