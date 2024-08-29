import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6'>
      <h1 className='mt-3 font-semibold text-xl '>Find The Best Food</h1>
      <div className="menu-btn flex gap-3 mt-3 overflow-x-scroll lg:overflow-x-hidden">
        <button className='px-3 font-bold py-2 bg-gray-200 hoer:text-white hover:bg-green-400 hover:text-white rounded-lg '>All</button>
        <button className='px-3 font-bold py-2 bg-gray-200 hoer:text-white hover:bg-green-400 hover:text-white rounded-lg '>Lunch</button>
        <button className='px-3 font-bold py-2 bg-gray-200 hoer:text-white hover:bg-green-400 hover:text-white rounded-lg '>Breakfast</button>
        <button className='px-3 font-bold py-2 bg-gray-200 hoer:text-white hover:bg-green-400 hover:text-white rounded-lg '>Dinner</button>
        <button className='px-3 font-bold py-2 bg-gray-200 hoer:text-white hover:bg-green-400 hover:text-white rounded-lg '>Snacks</button>
      </div>
    </div>
  )
}

export default CategoryMenu
