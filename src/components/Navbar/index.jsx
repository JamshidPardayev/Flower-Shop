import React from 'react'
import { IoMdNotificationsOutline, IoIosSearch, IoMdLogIn  } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between max-w-[1200px] px-[20px] min-h-[100px] border-b border-b-green-600 mx-auto'>
        <img src="/image/logo.svg" alt="logo" />
        <div className='flex gap-x-[30px] text-[16px] font-bold'>
            <NavLink><p>Home</p></NavLink>
            <NavLink><p>Blog</p></NavLink>
        </div>
        <div className='flex items-center gap-x-[30px] text-[25px]'>
            <IoIosSearch />
            <IoMdNotificationsOutline />
            <AiOutlineShoppingCart />
            <button className='flex items-center justify-center text-white w-[96px] h-[36px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300'><IoMdLogIn className='text-[25px]'/> <p>Login</p></button>
        </div>

    </div>
  )
}

export default Navbar