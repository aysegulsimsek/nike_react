import React, { useState } from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { products } from '../allProducts'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material';

const Popular = () => {
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleOpen = () => {
    setOpenBackdrop(true);
    setTimeout(() => {
      navigate("/products")
    }, 2000); 

  }

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className='flex text-4xl font-palanquin font-bold gap-3'>Our
          <span className='nike'>Popular</span>
          Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort,design and value</p>
      </div>
     
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 select-none">
          {products.slice(0,4).map((item) => (
            <PopularProductCard key={item.name} {...item} />
          ))}
      </div>
      <div className='flex justify-center' onClick={handleOpen}>
      <Button label='See All Prouducts'/>
      <Backdrop
  sx={{
    color: '#fff',
    zIndex: (theme) => theme.zIndex.drawer + 1,
    display: 'flex', // Backdrop içeriğini tam ortalamak için flex düzeni
    alignItems: 'center',
    justifyContent: 'center',
  }}
  open={openBackdrop}
  onClick={handleClose}
>
  <div className='flex flex-col items-center'>
    <CircularProgress color="inherit" size={60} /> {/* Boyutu büyüttük */}
    <h1 className='mt-4 text-xl font-semibold'>Yönlendiriliyorsunuz...</h1> {/* Araya mesafe ve daha büyük bir yazı ekledik */}
  </div>
</Backdrop>
      </div>
    </section>
  )
}

export default Popular
