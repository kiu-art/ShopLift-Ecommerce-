import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function AdminNavBar() {
  const [adminName, setAdminName] = useState("Admin")

  return (
    <div className='fixed w-full'>
      <div className='h-18 w-full bg-black flex justify-between text-white text-2xl p-4 px-8'>
        <h2 className=''>{adminName}</h2>
        <h1 className='text-zinc-400'>ShopeLift</h1>
        <button className=' hover:bg-red-200 duration-300 transition-colors rounded-lg px-2 py-1'>
          <Link to={"/home"} className='text-red-600 text-xl'>Logout</Link>
        </button>
      </div>
    </div>
  )
}

export default AdminNavBar