import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
const CountBtn = () => {
  const [quantity, setQuantity] = useState(1);
  
    const increase = () => {
      setQuantity(quantity + 1)
    }
    const decrement = () => {
      if (count > 1) {
        setQuantity(quantity - 1);
      }
    };
  return (
    <div className='w-[102px] border rounded-xl border-gray-300 flex justify-between py-2 mt-3'>
    <button className='w-[34px] flex justify-center items-center' onClick={decrement}><FaMinus color='red'/></button>
    <div className='font-semibold'>
    {quantity}
   </div>
    <button className='w-[34px] flex justify-center items-center' onClick={increase}><FaPlus color='red'/></button>
  </div>
  )
}

export default CountBtn
