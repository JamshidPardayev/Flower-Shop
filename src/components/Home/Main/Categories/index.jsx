import React from 'react'
import Category from './Category'
import PriceRange from './PriceRange'
import Discount from './Discount'

const Categories = () => {
  return (
    <div className='max-w-[310px] max-lg:hidden'>
        <Category />
        <PriceRange />
        <Discount />
    </div>
    
  )
}

export default Categories