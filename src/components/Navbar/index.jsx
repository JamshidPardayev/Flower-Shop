import React, { useState } from 'react';
import { IoMdNotificationsOutline, IoIosSearch, IoMdLogIn } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import '@fontsource/inter';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div  style={{ fontFamily: 'Inter, sans-serif' }} className='relative'>
      <div className='flex items-center justify-between max-w-[1200px] px-[20px] min-h-[100px] border-b border-b-green-600 mx-auto'>
        <img src="/image/logo.svg" alt="logo" />
        
        <div className='flex gap-x-[30px] text-[16px] font-bold max-sm:hidden'>
          <NavLink to="/"><p>Home</p></NavLink>
          <NavLink to="/blog"><p>Blog</p></NavLink>
          {/* <NavLink to="/register"><p>reg</p></NavLink> */}
        </div>

        <div className='flex items-center gap-x-[30px] text-[25px]'>
          <IoIosSearch className='cursor-pointer text-[#3D3D3D]' />
          <IoMdNotificationsOutline className='max-sm:hidden text-[#3D3D3D]' />
          <AiOutlineShoppingCart className='cursor-pointer text-[#3D3D3D]' />
          <button className='flex items-center justify-center text-white w-[96px] h-[36px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300 max-sm:hidden'>
            <IoMdLogIn className='text-[25px]' /> <p>Login</p>
          </button>
          <IoIosMenu
            onClick={() => setMenuOpen(true)}
            className='hidden text-[30px] text-[#3D3D3D] font-bold cursor-pointer hover:text-gray-950 duration-300 max-sm:block'
          />
        </div>
      </div>

      <div className={`fixed top-0 right-0 w-full max-w-[100%] bg-white h-full p-4 z-50 shadow-md transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between items-center'>
          <h2 className='text-[18px] font-bold'>Site map</h2>
          <HiOutlineXMark
            onClick={() => setMenuOpen(false)}
            className='text-[25px] font-bold text-[#3D3D3D] cursor-pointer hover:text-black duration-300'
          />
        </div>
        <div className='flex flex-col gap-y-[10px] text-[16px] font-bold mt-[15px]'>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <p className='pl-[5px] border-l-[4px] border-l-[#46a358] text-[#46a358] h-[40px] flex items-center'>Home</p>
          </NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            <p className='pl-[5px] hover:border-l-[4px] hover:border-l-[#46a358] h-[40px] hover:text-[#46a358] flex items-center'>Blog</p>
          </NavLink>
        </div>
        <NavLink to="/register">
        <button className='flex items-center justify-center mx-auto mt-[20px] text-white w-[80%] h-[50px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300'>
          <IoMdLogIn className='text-[25px]' /> <p>Login</p>
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
