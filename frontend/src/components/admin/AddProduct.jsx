import React, { useState } from 'react'
import { adminCreateProduct } from '../../utils/api'


function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    name:'',
    description:'',
    warranty:'',
    price:'',
    image:null
  })
  const handleChange = (e)=>{
    const{name,value,files} = e.target;
    if(name==="image"){
      setProductDetails((prev)=>{
        return({
          ...prev,
          [name]:files[0]
        }
        )
      })
    }
    else{
      setProductDetails((prev)=>{
        return({
          ...prev,
          [name]:value
        }
        )
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", productDetails.name);
    formData.append("description", productDetails.description);
    formData.append("warranty", productDetails.warranty);
    formData.append("price", productDetails.price);
    formData.append("productImage", productDetails.image);

    await adminCreateProduct(formData);
  };
  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded-xl w-[600px] " >

        <div className="mb-5">
          <label className="block mb-2 text-zinc-300">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            onChange={handleChange}
            className="
            w-full
            bg-zinc-800
              border border-zinc-700
              rounded-lg
              p-3
              outline-none
              focus:border-indigo-500
              "
              />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-zinc-300">
            Description
          </label>

          <textarea
              name="description"
              onChange={handleChange}
              rows="4"
              placeholder="Enter Product Description"
              className="
              w-full
              bg-zinc-800
              border border-zinc-700
              rounded-lg
              p-3
              outline-none
              focus:border-indigo-500
              "
              />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-zinc-300">
            Warranty
          </label>

          <input
            type="text"
            onChange={handleChange}
            name="warranty"
            placeholder="Example: 2 Years"
            className="
              w-full
              bg-zinc-800
              border border-zinc-700
              rounded-lg
              p-3
              outline-none
              focus:border-indigo-500
              "
              />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-zinc-300">
            Price
          </label>

          <input
            type="number"
            onChange={handleChange}
            name="price"
            placeholder="Enter Price"
            className="
              w-full
              bg-zinc-800
              border border-zinc-700
              rounded-lg
              p-3
              outline-none
              focus:border-indigo-500
              "
              />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-zinc-300">
            Product Image
          </label>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="
              w-full
              bg-zinc-800
              border border-zinc-700
              rounded-lg
              p-3
              file:bg-indigo-600
              file:border-none
              file:text-white
              file:px-4
              file:py-2
              file:rounded-lg
              file:mr-4
            "
          />
        </div>

        <button
          type="submit"
          className="
            bg-indigo-600
            hover:bg-indigo-500
            px-6
            py-3
            rounded-lg
            font-semibold
            transition-colors
          "
        >
          Add Product
        </button>

      </form>

    </div>
  )
}

export default AddProduct