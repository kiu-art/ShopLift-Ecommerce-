import React from 'react'

function Profile() {
  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Profile
      </h1>

      <div className="bg-zinc-900 rounded-xl p-6 w-fit">

        <div className="mb-4">
          <p className="text-zinc-400">Username</p>
          <h2 className="text-xl">Ujwal</h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">Email</p>
          <h2 className="text-xl">ujwal@gmail.com</h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">Phone Number</p>
          <h2 className="text-xl">9876543210</h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">Date of Birth</p>
          <h2 className="text-xl">01/01/2000</h2>
        </div>

        <button
          className="
            mt-4
            bg-indigo-600
            hover:bg-indigo-500
            px-5 py-2
            rounded-lg
            transition-colors
          "
        >
          Edit Profile
        </button>

      </div>

    </div>
  )
}

export default Profile