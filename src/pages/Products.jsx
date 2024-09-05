import React from 'react'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { products } from '../allProducts/index'
import SmBasket from '../components/SmBasket'

const Products = () => {
  return (
    <div>


      <Nav />
      <div className='absolute mt-[84px] grid grid-cols-2 gap-6 px-6 py-10 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {products.map((product, i) => (
          <ProductCard key={product.URL} {...product} i={i} />
        ))}
      </div>
      <section className='hidden max-lg:block'>
      <SmBasket/>
    </section>
    </div>
  )
}

export default Products
