import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { IconButton } from '@mui/material';
import '../css/Shake.css'
// import { addToBasket } from '../redux/slices/basketSlice';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CountBtn from './CountBtn';
const ProductCard = ({ name, imgURLs, specious, price,URL }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [openCount, setOpenCount] = useState(false);
  const handleCount = () => {
    setOpenCount(true)
  }
  const handleCountClose = () => {
    setOpenCount(false)
    
  }
//   const addBasket = () => {
//     const payload = {
//         id,
//         price: price,
//         imgURLs: imgURLs[0],  
//         name: name,
//         count
//     };
//     dispatch(addToBasket(payload));
// };
  return (
  
          <div className='col-6 col-md-3  product-grid-item-container p-0 px-md-1 mb-md-4 rendered-enhanced flex-1 '  onMouseLeave={handleCountClose}>
                      <div>
        <img src={imgURLs[0]} alt={name} className='max-w-[300px]' onClick={() => navigate("/details/" + URL)} />
        <div className='flex justify-between items-start'>
          <h3 className='mt-2 text-2xl leading-normal font-medium font-palanquin select-text'>{name}</h3>
          <IconButton  onMouseOver={handleCount}>
            <ShoppingBagIcon sx={{
        color: 'orange',
        transition: 'transform 0.2s ease-in-out', 
        ":hover": {
          animation: 'shake 0.5s infinite',
        }
      }} fontSize='medium'/>
          </IconButton>
         
        </div>
        <div className='flex justify-end'>
        {
            openCount && 
          <CountBtn/>
            
          }

        </div>
                      
                     <p className='text-slate-gray'>{specious} </p>
                     <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
                     </div>
      </div>

  )
}

export default ProductCard
