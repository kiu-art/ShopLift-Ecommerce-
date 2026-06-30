import React, { useState, useEffect } from 'react'
import { adminOrders } from '../../utils/api'

function Orders() {

  const [status, setStatus] = useState("Not Shipped")
  const [orders, setOrders] = useState(null)

  useEffect(() => {

    const loadOrders = async () => {
      try {
        const data = await adminOrders()
        console.log(data);
        setOrders(data.orders)
      } catch (error) {
        console.error(error)
      }
    }

    loadOrders()

  }, [])

  if (orders === null) {
    return (
      <h1 className='text-white text-2xl'>
        Loading Orders...
      </h1>
    )
  }
  if (orders.length === 0) {
    return (
      <h1 className='text-white text-2xl'>
        You have No Orders
      </h1>
    )
  }

  const filteredOrders = orders.filter(
    (order) => order.status === status
  )

  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Orders
      </h1>

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

      {filteredOrders.length === 0 && (
        <h2 className="text-zinc-400 text-xl">
          No Orders Found
        </h2>
      )}

      <div className="flex flex-wrap gap-6">

        {filteredOrders.map((order, index) => (

          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-4 w-[340px]"
          >

            <img
              src={order.product.image}
              alt={order.product.name}
              className="
                w-full
                h-48
                object-cover
                rounded-lg
                mb-4
              "
            />

            <h2 className="text-xl font-semibold mb-2">
              {order.product.name}
            </h2>

            <p className="text-zinc-400">
              Customer: {order.customer.name}
            </p>

            <p className="text-zinc-400">
              Price: ₹{order.product.price}
            </p>

            <div className="mt-3">

              <p className="text-zinc-300 font-medium mb-1">
                Address
              </p>

              <div className="text-zinc-400 text-sm">
                <p>{order.customer.address.street}</p>
                <p>{order.customer.address.city}</p>
                <p>{order.customer.address.state}</p>
                <p>{order.customer.address.pinCode}</p>
              </div>

            </div>
            <button className='text-white bg-indigo-700 p-2 m-3'>
              Update
            </button>

            <div
              className="
                inline-block
                mt-4
                px-3
                py-1
                rounded-full
                bg-indigo-600
                text-sm
              "
            >
              {order.status}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Orders