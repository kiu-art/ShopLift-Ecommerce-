import React, { useRef, useState } from 'react'
import { adminCreateProduct } from '../../utils/api'

function AddProduct() {
  const fileInputRef = useRef(null)

  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    warranty: '',
    price: '',
    image: null,
    category:""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === "image") {
      setProductDetails((prev) => ({
        ...prev,
        image: files[0]
      }))
    } else {
      setProductDetails((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true);

    try {
      const formData = new FormData()

      formData.append("name", productDetails.name)
      formData.append("description", productDetails.description)
      formData.append("warranty", productDetails.warranty)
      formData.append("price", productDetails.price)
      formData.append("productImage", productDetails.image)
      formData.append("category", productDetails.category)

      const response = await adminCreateProduct(formData)

      setProductDetails({
        name: '',
        description: '',
        warranty: '',
        price: '',
        image: null,
        category:""
      })

      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      alert("Product Added Successfully")
      console.log(response)

    } catch (error) {
      console.error(error)
      alert("Failed To Add Product")
    }
    setLoading(false);
  }

  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-xl w-[600px]"
      >

        <div className="mb-5">
          <label className="block mb-2 text-zinc-300">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={handleChange}
            placeholder="Enter Product Name"
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
            value={productDetails.description}
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
            name="warranty"
            value={productDetails.warranty}
            onChange={handleChange}
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
            name="price"
            value={productDetails.price}
            onChange={handleChange}
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
            ref={fileInputRef}
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
        <div className="mb-6">
          <label className="block mb-2 text-zinc-300">
            Product Category
          </label>

          <input
            ref={fileInputRef}
            type="text"
            name="category"
            placeholder='Enter Category'
            onChange={handleChange}
            value={productDetails.category}
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
          {loading?("loading..."):("Add Product")}
        </button>

      </form>

    </div>
  )
}

export default AddProduct