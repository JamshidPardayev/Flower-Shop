import React from 'react'
import Profile from '..'

const MyAccaunt = () => {
  return (
      <div className='w-[100%]'>
        <form action="" className='flex justify-between gap-x-[10px] '>
          <div className='flex flex-col w-[100%] gap-y-4'>
            <label htmlFor="" className='text-[14px] '>* First Name</label>
            <input type="text" className='h-[40px] w-full px-2 rounded-[6px] border outline-none' placeholder='Your Name'/>

            <label htmlFor="" className='text-[14px] '>* Email Address</label>
            <input type="email" className='h-[40px] w-full px-2 rounded-[6px] border outline-none' placeholder='Your Email'/>

            <label htmlFor="" className='text-[14px] '>* Username</label>
            <input type="text" className='h-[40px] w-full px-2 rounded-[6px] border outline-none' placeholder='Your Username'/>

            <button className='w-[120px] h-[40px] w-full rounded-[6px] bg-[#46A358] text-[15px] text-white hover:bg-green-700 duration-300 mt-2'>Save Changes</button>
          </div>
          <div className='flex flex-col w-[100%] gap-y-4'>
            <label htmlFor="" className='text-[14px] '>* Last Name</label>
            <input type="text" className='h-[40px] w-full px-2 rounded-[6px] border outline-none' placeholder='Your Last name'/>

           <label htmlFor="" className='text-[14px] '>* Phone Number</label>
            <input type="number" className='h-[40px] w-full px-2 rounded-[6px] border outline-none' placeholder='Your Phone Number'/>

            <label htmlFor="" className='text-[14px] '>* Profile Photo</label>
            <input
              id="profilePhoto"
              type="file"
              className=" rounded-md  w-full max-w-[250px] text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#46A358] file:text-white hover:file:bg-[#3d8b4e] transition duration-200"
            />
          </div>
        </form>
      </div>
  )
}

export default MyAccaunt