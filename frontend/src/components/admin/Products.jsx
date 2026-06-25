import React from 'react'
import ProductCard from '../ProductCard';
import { adminDeleteProduct } from '../../utils/api'


function Products({productData}) {

  

  if(!productData){
    return (
      <h1 className='text-white'>loading ...</h1>
    ) 
  }
  if(productData.length === 0){
    return(
      <h1 className='text-white'>You Have NO Product <br />PLease Add Product</h1>
    )
  }
  else{
    return (
      <div className='flex flex-wrap pl-40'>
          {productData.map((product)=>{
            return(
              <ProductCard key={product._id} image={product.image} name={product.name} description={product.description} price={product.price} showDelete={true} _id={product._id} onDelete={()=>{adminDeleteProduct(product._id)}} />
            )
          })}
      </div>
    )
  }
}

export default Products