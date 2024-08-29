import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeCart } from '../Rudux/Slicers/CartSlicer';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();



  return (
    <div>
      <div className="w-full mt-3 mb-5 relative h-[80px] shadow-lg">
        <div className="flex w-full h-full space-x-4 mb-3 items-center">
          <MdDelete 
            className="absolute right-5 top-0 cursor-pointer" 
            onClick={() => {
              dispatch(removeCart({ id: item.id }));
            }}
          />
          <img
            src={item.img}
            alt={item.name}
            className="w-[50px] h-[50px]"
          />
          <div>
            <h1 className="font-bold">{item.name}</h1>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-green-500">RS. {item.price}</span>
              <div className="btn flex items-center space-x-2 absolute right-4">
                <button className="px-1 bg-green-600 text-white rounded-lg hover:bg-green-400">
                  +
                </button>
                <span className="font-bold">{item.qty}</span>
                <button className="px-1 bg-green-600 text-white rounded-lg hover:bg-green-400">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem
