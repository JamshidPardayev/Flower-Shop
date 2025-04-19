import React from 'react'
import { IoMdMenu } from "react-icons/io";

const Sort = () => {
  return (
    <div>
        <div className='flex items-center gap-x-2 max-lg:hidden'>
          <p>Sort by: </p>
          <select name="" id="" className='border p-2 outline-none rounded-[5px]'>
              <option value="">Defoult Sorting</option>
              <option value="">The Cheapest</option>
              <option value="">Most Expensive</option>
          </select>
        </div>
        <div>
          <IoMdMenu className='hidden max-lg:block text-[30px] text-[#3D3D3D] hover:text-black duration-300 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Sort