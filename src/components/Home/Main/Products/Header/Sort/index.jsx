import React from 'react'

const Sort = () => {
  return (
    <div className='flex items-center gap-x-2'>
        <p>Sort by: </p>
        <select name="" id="" className='border p-2 outline-none rounded-[5px]'>
            <option value="">Defoult Sorting</option>
            <option value="">The Cheapest</option>
            <option value="">Most Expensive</option>
        </select>
    </div>
  )
}

export default Sort