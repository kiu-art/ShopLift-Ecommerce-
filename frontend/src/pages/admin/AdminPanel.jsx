import React,{useState} from 'react'
import AdminNavBar from '../../components/admin/AdminNavBar'
import AdminSideBar from '../../components/admin/AdminSideBar'
import DashBoard from '../../components/admin/DashBoard'
import Profile from '../../components/admin/Profile'
import Orders from '../../components/admin/Orders'
import AddProduct from '../../components/admin/AddProduct'
import Products from '../../components/admin/Products'

function AdminPanel() {
  const [activePage, setActivePage] = useState("DashBoard")
  return (
    <div>
        <AdminNavBar/>
        <div className='flex'>
          <div className="fixed top-18">
            <AdminSideBar  setActivePage={setActivePage}/>
          </div>
          <div className='w-full flex justify-center items-center bg-zinc-950 min-h-[calc(100vh)] pt-18'>
            {activePage==="DashBoard" && <DashBoard/>}
            {activePage==="Profile" && <Profile/>}
            {activePage==="Products" && <Products/>}
            {activePage==="Orders" && <Orders/>}
            {activePage==="Add Product" && <AddProduct/>}
          </div>
        </div>
    </div>
  )
}

export default AdminPanel