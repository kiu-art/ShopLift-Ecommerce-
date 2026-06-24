import React from 'react'
import { useState } from 'react'

function AdminSideBar({setActivePage}) {
  let pages=["DashBoard","Profile","Orders","Add Product"];

  return (
    <div className='flex flex-col justify-evenly bg-black w-fit h-[calc(100vh_-_4.5rem)]'>
        {pages.map((name)=>{
            return (
                <button key={name} className="bg-zinc-800 block py-1 rounded-lg text-white w-30 mx-3 hover:bg-indigo-500 duration-300 transition-colors" onClick={()=>{setActivePage(name)}}>{name}</button>
            )
        })}
    </div>
  )
}

export default AdminSideBar