import React from 'react'

const MyAddress = () => {
  return (
    <div>
        <div className='flex justify-between items-end gap-x-2'>
          <div>
            <h2 className='text-[16px] font-bold mb-1'>Billing Address</h2>
            <p className='text-[16px] max-sm:text-[14px]'>The following addresses will be used on the checkout page by default.</p>
          </div>
          <button className='w-[100px] h-[40px] bg-[#46A358] text-white rounded-[6px] hover:bg-green-700 duration-300'>Add</button>
        </div>
        <form action="" className='flex justify-between gap-x-2 my-[30px]'>
          <div className='w-[100%] flex flex-col gap-y-3 '>
            <label htmlFor="" className='text-[14px]'>* First name</label>
            <input type="text" placeholder='Your Name' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* Country/Region</label>
            <input type="text" placeholder='Your Country' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>
            
            <label htmlFor="" className='text-[14px]'>* Streed Address</label>
            <input type="text" placeholder='Your Address' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* State</label>
            <input type="text" placeholder='Your State' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* Email Address</label>
            <input type="email" placeholder='Your Email' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <button className='w-[120px] h-[40px] rounded-[6px] bg-[#46A358] text-[15px] text-white hover:bg-green-700 duration-300 mt-2'>Save Address</button>
          </div>
          <div className='w-[100%] flex flex-col gap-y-3 '>
            <label htmlFor="" className='text-[14px]'>* Last name</label>
            <input type="text" placeholder='Your Last Name' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* Town/City</label>
            <input type="text" placeholder='Your Town' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* Extra Address</label>
            <input type="text" placeholder='Your Extra Addres' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* Zip</label>
            <input type="text" placeholder='Your Zip' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>

            <label htmlFor="" className='text-[14px]'>* Phone Number</label>
            <input type="number" placeholder='Your Phone Number' className='h-[35px] w-full px-2 border rounded-[6px] outline-none'/>
          </div>
        </form>
        <div>

        </div>
    </div>
  )
}

export default MyAddress