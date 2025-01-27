import React from 'react'
import ProductDetails from '../ProductDetails'
import ProductCard from '../ProductCard'
import { OpenStore } from '../OpenStore'

const ProductDetailsPage = () => {
  return (
    <div className='mx-20'>

<ProductDetails/>


<div>
        <h1 className='font-bold text-[18px] mb-5'>You might also like</h1>
      </div>

      <div className='flex flex-row justify-between mb-10 '>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  

      <div className='mb-10'>
      <OpenStore/>
    </div>

    </div>
     
  )
}

export default ProductDetailsPage