import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex  flex-col lg:flex-row  justify-between py-3 mx-5 space-y-6'>
      <div className='text-center'>
        <h3 className='text-2xl text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
        <h1  className='text-2xl font-bold'>Flaoro Food</h1>
      </div>
      <div>
        <input type="search" name='search' id='search' autoComplete="off" placeholder='Search' className='py-3 w-full text-sm rounded-lg outline-none border border-gray-300 lg:w-[25vw] px-2'/>
      </div>
    </nav>
  )
}

export default Navbar
