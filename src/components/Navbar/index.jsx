import React from 'react'
import { IoMdNotificationsOutline, IoIosSearch, IoMdLogIn  } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between max-w-[1200px] px-[20px] min-h-[100px] border-b border-b-green-600 mx-auto'>
        <img src="/image/logo.svg" alt="logo" />
        <div className='flex gap-x-[30px] text-[16px] font-bold max-sm:hidden'>
            <NavLink><p>Home</p></NavLink>
            <NavLink><p>Blog</p></NavLink>
        </div>
        <div className='flex items-center gap-x-[30px] text-[25px]'>
            <IoIosSearch className='cursor-pointer text-[#3D3D3D]'/>
            <IoMdNotificationsOutline className='max-sm:hidden text-[#3D3D3D]'/>
            <AiOutlineShoppingCart className='cursor-pointer text-[#3D3D3D]'/>
            <button className='flex items-center justify-center text-white w-[96px] h-[36px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300 max-sm:hidden'><IoMdLogIn className='text-[25px]'/> <p>Login</p></button>
            <IoIosMenu className='hidden text-[30px] text-[#3D3D3D] font-bold cursor-pointer hover:text-gray-950 duration-300 max-sm:block'/>
        </div>

        {/* <div className='w-[100%] h-[100vh]'>
          <div >
            <div className='flex'>
              <h2>Site map</h2>
              <HiOutlineXMark />
            </div>
            <div className='flex flex-col  gap-y-[10px] text-[16px] font-bold'>
                <NavLink><p>Home</p></NavLink>
                <NavLink><p>Blog</p></NavLink>
            </div>
          </div>
        </div> */}

    </div>
  )
}

export default Navbar