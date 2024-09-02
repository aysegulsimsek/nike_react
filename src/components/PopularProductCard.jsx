import React, { useContext } from 'react';
import { star } from '../assets/icons';
import { useNavigate } from 'react-router-dom';
import Zoom from './Zoom';

const PopularProductCard = ({ imgURL, name, price, rate, URL }) => {
  const navigate = useNavigate();



  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full  max-sm:items-center' onClick={() => navigate(`/details/${URL}`)}>
      
  <img 
    src={imgURL}
    alt={name}
    className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
  />

    
      <div className=''>
        <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            ({rate})
          </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin select-text'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
