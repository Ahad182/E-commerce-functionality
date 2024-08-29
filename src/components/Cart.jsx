import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import CartItem from "./CartItem";
import { useSelector } from 'react-redux'
import { IoCartSharp } from "react-icons/io5";


const Cart = () => {
  const [activeCart,setActiveCart]= useState(false)
  const Items = useSelector((state)=>state.cart.data)
  const totalItems = Items.length;
  const totalAmount = Items.reduce((acc, item) => {return acc + (item.price*item.qty)}, 0);

  return (
    <>
    <div className={` z-50 w-full fixed p-5  top-0 right-0 md:w-[300px] h-[100vh] bg-white items-center overflow-y-scroll overflow-x-hidden
    ${activeCart ? "translate-x-0":"translate-x-full"} transition-all duration-500`}>
      <div className="flex justify-between">
        <h1 className=" font-bold">My Order</h1>
        <MdOutlineCancel className="text-2xl font-bold p-1 bg-gray-200" onClick={()=>setActiveCart(!activeCart)}/>
      </div>

      {Items.length>0?
        Items.map((item)=>{
          return(
            <CartItem key={item.id} item={item}/>
          )
          
        }):<h1 className="my-10 text-center font-bold capitalize">Cart is Empty</h1>
      }

      
     

      <div className="px-3 w-full sticky left-0 bottom-0  space-y-3 bg-white py-2">
        <h3>
          Items : <span className="text-green-500 font-bold">{totalItems}</span>
        </h3>
        <h3>
          Total Amount :
          <span className="text-green-500 font-bold">RS {totalAmount}</span>
        </h3>
        <hr className="bg-green-700 h-1" />
        <button className="px-3 py-1 w-full  bg-green-500 text-white">
          Check Out
        </button>
      </div>
    </div>
    <IoCartSharp onClick={()=>setActiveCart(!activeCart)} className={` text-4xl p-1  fixed bottom-5 rounded-lg right-16 bg-gray-400 ${totalAmount > 0 && "animate-bounce transition-all  delay-500"} `}/>
    </>
  );
};

export default Cart;
