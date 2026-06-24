import React, { useState } from 'react'

function Orders() {

  const [status, setStatus] = useState("Not Shipped")

  const orders = [
    {
      _id: "1",
      productName: "Gaming Laptop",
      image: "https://via.placeholder.com/300",
      customer: "Ujwal",
      quantity: 2,
      price: 75000,
      status: "Not Shipped"
    },
    {
      _id: "2",
      productName: "iPhone",
      image: "https://via.placeholder.com/300",
      customer: "Rahul",
      quantity: 1,
      price: 80000,
      status: "On Delivery"
    },
    {
      _id: "3",
      productName: "Monitor",
      image: "https://via.placeholder.com/300",
      customer: "Aman",
      quantity: 1,
      price: 15000,
      status: "Shipped"
    }
  ]

  const filteredOrders = orders.filter(
    (order) => order.status === status
  )

  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Orders
      </h1>

      {/* Status Tabs */}
      <div className="flex gap-4 mb-8">

        <button
          onClick={() => setStatus("Not Shipped")}
          className={`
            px-4 py-2 rounded-lg transition-colors
            ${status === "Not Shipped"
              ? "bg-indigo-600"
              : "bg-zinc-800 hover:bg-zinc-700"}
          `}
        >
          Not Shipped
        </button>

        <button
          onClick={() => setStatus("On Delivery")}
          className={`
            px-4 py-2 rounded-lg transition-colors
            ${status === "On Delivery"
              ? "bg-indigo-600"
              : "bg-zinc-800 hover:bg-zinc-700"}
          `}
        >
          On Delivery
        </button>

        <button
          onClick={() => setStatus("Shipped")}
          className={`
            px-4 py-2 rounded-lg transition-colors
            ${status === "Shipped"
              ? "bg-indigo-600"
              : "bg-zinc-800 hover:bg-zinc-700"}
          `}
        >
          Shipped
        </button>

      </div>

      {/* Orders */}

      <div className="flex flex-wrap gap-6">

        {filteredOrders.map((order) => (

          <div
            key={order._id}
            className="bg-zinc-900 rounded-xl p-4 w-[320px]"
          >

            <img
              src={order.image}
              alt={order.productName}
              className="
                w-full
                h-48
                object-cover
                rounded-lg
                mb-4
              "
            />

            <h2 className="text-xl font-semibold mb-2">
              {order.productName}
            </h2>

            <p className="text-zinc-400">
              Customer: {order.customer}
            </p>

            <p className="text-zinc-400">
              Quantity: {order.quantity}
            </p>

            <p className="text-zinc-400 mb-2">
              Price: ₹{order.price}
            </p>

            <div className="
              inline-block
              px-3 py-1
              rounded-full
              bg-indigo-600
              text-sm
            ">
              {order.status}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Orders