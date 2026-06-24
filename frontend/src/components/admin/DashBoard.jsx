import React from 'react'

function DashBoard() {
  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="flex gap-6 flex-wrap">

        <div className="bg-zinc-900 rounded-xl p-6 w-64">
          <p className="text-zinc-400 mb-2">
            Total Products
          </p>

          <h2 className="text-4xl font-bold">
            24
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 w-64">
          <p className="text-zinc-400 mb-2">
            Total Orders
          </p>

          <h2 className="text-4xl font-bold">
            156
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 w-64">
          <p className="text-zinc-400 mb-2">
            Revenue
          </p>

          <h2 className="text-4xl font-bold">
            ₹52,000
          </h2>
        </div>

      </div>

      <div className="bg-zinc-900 rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-3">

          <div className="bg-zinc-800 p-3 rounded-lg">
            Product "Laptop" added
          </div>

          <div className="bg-zinc-800 p-3 rounded-lg">
            Order #123 received
          </div>

          <div className="bg-zinc-800 p-3 rounded-lg">
            Product "Phone" updated
          </div>

        </div>

      </div>

    </div>
  )
}

export default DashBoard