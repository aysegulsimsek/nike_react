import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { products } from '../constants';
import { products } from '../allProducts';
import { star } from '../assets/icons';
import Notfound from './Notfound';
import Nav from './Nav';
import Favories from './Favories';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';
import { IoBagAddOutline } from "react-icons/io5";
import NewBtn from './NewBtn';
import Zoom from './Zoom';

import CountBtn from './CountBtn';
const ProductDetails = () => {
  const { URL } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [isXLarge, setIsXLarge] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)'); // Tailwind'in xl breakpoint'i: 1280px
    setIsXLarge(mediaQuery.matches);

    const handleResize = () => setIsXLarge(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    // Cleanup function on component unmount
    return () => mediaQuery.removeListener(handleResize);
  }, []);
console.log(detailData)
  useEffect(() => {
    const product = products.find((item) => item.URL === URL);
    if (product) {
      setDetailData(product);
    } else {
      setDetailData(null);
    }
  }, [URL]);


  if (!detailData) {
    return <Notfound/>;
  }

  return (
    <main className='relative  box-border'>
      <Nav />
      <ToastContainer position='bottom-right' autoClose={1500} />
      <div className='w-full absolute mr-auto ml-auto mt-[120px] '>
        <div className='flex flex-1 flex-col lg:flex-row py-5 px-10 max-sm:w-full  max-lg:w-full xl:w-full mr-auto ml-auto bg-slate-50 max-sm:flex-col max-sm:items-center'>
          <div className='flex xl:flex-col'>
          {
            detailData.imgURLs.map((index) => (
          <img src={index} alt={detailData.name} width={150} className='mt-3' />
        ))
       }
          </div>
          <div className=''>
      {isXLarge ? (
        <Zoom src={detailData.imgURLs[0]} alt="" className='' />
      ) : (
        <img src={detailData.imgURLs[0]} alt=" " className='max-lg:w-full max-sm:w-full mr-auto' />
      )}
    </div>
          
    <div className=' max-lg:ml-3 w-1/2 max-sm:w-full max-sm:ml-0 flex flex-col xl:-ml-40  gap-2.5'>
            <div className='mt-8 flex justify-start gap-2.5'>
              <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({detailData.rate})
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin select-text'>{detailData.name}</h3>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{detailData.price}</p>
            <div className='flex items-center justify-around gap-3'>
             <CountBtn/>
            <Link to={""}>
              <NewBtn label="Sepete Ekle" icon= {<IoBagAddOutline/>} />
            </Link>
           </div>
            <Link to={""}>
              <NewBtn label="Favorilere Ekle" icon= { <Favories/>} />
              </Link>
    </div>
    </div>
    </div>
</main>
  );
};

export default ProductDetails;
