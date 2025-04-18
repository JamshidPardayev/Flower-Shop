import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";

const FooterContact = () => {
  return (
    <div className='flex items-center justify-between gap-3 max-w-[1200px] mx-auto min-h-[88px] px-[20px] bg-gray-200 max-md:flex-col max-md:py-5'>
        <img src="/image/logo.svg" alt="logo" />
        <div className='flex items-center gap-x-2 text-[14px] font-semibold'>
            <IoLocationOutline className='text-[20px] text-green-600'/>
            <p>70 West Buckingham Ave. <br /> Farmingdale, NY 11735</p>
        </div>
        <div className='flex items-center gap-x-2 text-[14px] font-semibold'>
            <MdOutlineEmail className='text-[20px] text-green-600'/>
            <p>contact@greenshop.com</p>
        </div>
        <div className='flex items-center gap-x-2 text-[14px] font-semibold'>
            <MdOutlinePhoneInTalk className='text-[20px] text-green-600'/>
            <p>+88 01911 717 490</p>
        </div>
    </div>
  )
}

export default FooterContact