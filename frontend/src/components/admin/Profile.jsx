function Profile({ profileData }) {

  if(!profileData){
    return <div className="text-white">Loading...</div>
  }

  return (
    <div className="bg-zinc-950 text-white min-h-full p-8">

      <h1 className="text-3xl font-bold mb-8">
        Profile
      </h1>

      <div className="bg-zinc-900 rounded-xl p-6 w-fit">

        <div className="mb-4">
          <p className="text-zinc-400">Username</p>
          <h2 className="text-xl">{profileData.name}</h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">Email</p>
          <h2 className="text-xl">{profileData.email}</h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">Phone Number</p>
          <h2 className="text-xl">{profileData.phoneNo}</h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">Date of Birth</p>
          <h2 className="text-xl">
            {new Date(profileData.dateOfBirth).toLocaleDateString()}
          </h2>
        </div>

        <div className="mb-4">
          <p className="text-zinc-400">GST No.</p>
          <h2 className="text-xl">{profileData.gstNo}</h2>
        </div>

      </div>

    </div>
  )
}

export default Profile