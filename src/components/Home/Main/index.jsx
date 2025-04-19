import React from 'react'
import Categories from './Categories'
import Products from './Products'

const Main = () => {
  return (
    <div className='flex gap-x-[50px] max-w-[1200px] justify-between mx-auto px-[20px] py-[30px]'>
      <Categories/>
      <Products />
    </div>
  )
}

export default Main