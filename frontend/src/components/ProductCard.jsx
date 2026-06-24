import React from 'react'

function ProductCard({
  image,
  name,
  description,
  price,
  showDelete = false,
  onDelete = () => {},
  onClick = () => {}
}) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 w-[300px] hover:bg-zinc-800 transition-colors">

      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold text-white mb-2">
        {name}
      </h2>

      <p className="text-zinc-400 mb-3">
        {description}
      </p>

      <p className="text-2xl font-bold text-white mb-4">
        ₹{price}
      </p>

      <div className="flex gap-3">

        <button
          onClick={onClick}
          className="
            flex-1
            bg-indigo-600
            hover:bg-indigo-500
            text-white
            py-2
            rounded-lg
            transition-colors
          "
        >
          View
        </button>

        {showDelete && (
          <button
            onClick={onDelete}
            className="
              bg-red-600
              hover:bg-red-500
              text-white
              px-4
              rounded-lg
              transition-colors
            "
          >
            Delete
          </button>
        )}

      </div>

    </div>
  )
}

export default ProductCard