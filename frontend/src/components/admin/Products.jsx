import React from 'react'
import ProductCard from '../ProductCard';

function Products() {
  let products=[];
  return (
    <div>
        {products.map((product)=>{
            <ProductCard image={product.image} name={product.name} description={product.description} price={product.price} showDelete={true} />
        })}
    </div>
  )
}

export default Products