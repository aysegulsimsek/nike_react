import React, { useState } from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const Popular = () => {

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className='flex text-4xl font-palanquin font-bold gap-3'>Our
          <span className='nike'>Popular</span>
          Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort,design and value</p>
      </div>
     
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 select-none">
          {products.map((item) => (
            <PopularProductCard key={item.name} {...item} />
          ))}
        </div>
      
    </section>
  )
}

export default Popular
