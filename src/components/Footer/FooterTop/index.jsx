import React from 'react'

const FooterTop = () => {
  return (
    <div className='flex max-w-[1200px] py-[25px] mx-auto min-h-[250px]  bg-[#FBFBFB] max-sm:flex-col max-sm:text-center gap-y-2'>
      <div className='px-[23px] border-r border-r-green-300'>
        <img src="/image/footer_flower_2.png" alt="flower_img" className='max-sm:mx-auto'/>
        <h2 className='text-[17px] text-[#3D3D3D] font-bold my-[10px]'>Garden Care</h2>
        <p className='text-[13px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>

      <div className='px-[23px] border-r border-r-green-300'>
        <img src="/image/footer_flower_3.png" alt="flower_img" className='max-sm:mx-auto'/>
        <h2 className='text-[17px] text-[#3D3D3D] font-bold my-[10px]'>Plant Renovation</h2>
        <p className='text-[13px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>

      <div className='px-[23px] '>
        <img src="/image/footer_flower_2.png" alt="flower_img" className='max-sm:mx-auto'/>
        <h2 className='text-[17px] text-[#3D3D3D] font-bold my-[10px]'>Watering Graden</h2>
        <p className='text-[13px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      
      <div className='px-[23px] '>
        <h2 className='text-[17px] text-[#3D3D3D] font-bold my-[10px]'>Would you like to join newsletters?</h2>
        <div className='flex my-[17px]'>
          <input type="email" placeholder='Enter Your Email Address' className='h-[40px] w-[100%] rounded-tl-[6px] rounded-bl-[6px] outline-none px-2'/>
          <button className='h-[40px] w-[85px] rounded-tr-[6px] rounded-br-[6px] text-white text-[18px] font-bold bg-[#46A358] '>Join</button>
        </div>
        <p className='text-[13px] text-[#727272]'>We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
      </div>
    </div>
  )
}

export default FooterTop