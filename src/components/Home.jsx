import React from 'react'
import Navbar from './Navbar'
import CategoryMenu from './CategoryMenu'
import Fooditems from './Fooditems'
import Cart from './Cart'

const Home = () => {
  return (
    <>
        <Navbar/>
        <CategoryMenu/>
        <Fooditems/>
        <Cart/>
    </>
  )
}

export default Home
