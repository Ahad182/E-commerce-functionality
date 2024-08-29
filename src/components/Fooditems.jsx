import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'

const Fooditems = () => {
  return (
    <div className='flex flex-wrap lg:justify-between justify-center mx-auto gap-3 px-6'>
        {
          FoodData.map((item)=>{
            return(
              // console.log(item)
              <FoodCard key={item.id} item={item}/>
            )
          })
        }
        
    </div>
  )
}

export default Fooditems
