import React from 'react'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import {products} from '../allProducts/index'

const Products = () => {
  return (
      <div>
          <Nav />
          <div className='absolute mt-[84px] flex px-9 py-10 gap-10 flex-wrap sm:justify-center'>
          {
              products.map((product,i) => (
                  <ProductCard  key={product.URL} {...product} i={i} />
              ))
      }
          </div>
  
         
    </div>
  )
}

export default Products
