import React from 'react'
import Sort from './Sort'
import MyTab from './MyTab'

const Header = () => {
  return (
    <div className='w-[100%] flex justify-between items-center'>
      <MyTab />
      <Sort />
    </div>
  )
}

export default Header