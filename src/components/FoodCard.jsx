import React from 'react';
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Rudux/Slicers/CartSlicer';

const FoodCard = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className='w-[250px] p-7 mt-7 shadow-2xl flex flex-col justify-center
    '>
        <div>
            <img src={item.img} alt="" className='w-full h-[150px] mb-4 object-contain hover:scale-110 transition-all duration-500 ease-in-out'/>
        </div>
        <div className='flex justify-between font-semibold'>
            <h3>{item.name}</h3>
            <span>Rs {item.price}</span>
        </div>
        <p className='text-sm line-clamp-2'>{item.desc}</p>
        <div className='flex justify-between mt-4'>
            <span className='flex items-center justify-between  '><FaStar className='text-yellow-300 mr-2'/> {item.rating}</span>
            <button className='bg-green-500 text-white px-3 py2 rounded-xl hover:bg-green-600' onClick={()=>{
              dispatch(addToCart({...item,qty:1}))
            }}>Add To Cart</button>
        </div>
    </div>
  )
} 

export default FoodCard
