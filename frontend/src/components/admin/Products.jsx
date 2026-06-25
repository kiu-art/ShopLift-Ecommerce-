import React, { useEffect } from 'react'
import ProductCard from '../ProductCard';
import { useState } from 'react';
import { adminProducts } from '../../utils/api';

function Products() {

  const [productData, setProductData] = useState(null)
  useEffect(()=>{
    const loadProducts = async()=>{
      try {
        const data = await adminProducts()
        console.log(data);
        setProductData(data)
        } catch (error) {
        console.error("Failed to load profile:", error)
      }
    }
    loadProducts();
  },[])
  
  if(productData==null){
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
              <ProductCard key={product._id} image={product.image} name={product.name} description={product.description} price={product.price} showDelete={true} _id={product._id} />
            )
          })}
      </div>
    )
  }
}

export default Products