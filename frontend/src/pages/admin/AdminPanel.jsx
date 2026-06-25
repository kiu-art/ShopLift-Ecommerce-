import React, { useState, useEffect } from 'react'
import AdminNavBar from '../../components/admin/AdminNavBar'
import AdminSideBar from '../../components/admin/AdminSideBar'
import DashBoard from '../../components/admin/DashBoard'
import Profile from '../../components/admin/Profile'
import Orders from '../../components/admin/Orders'
import AddProduct from '../../components/admin/AddProduct'
import Products from '../../components/admin/Products'
import { adminCreateProduct, adminProducts, adminProfile } from '../../utils/api'

function AdminPanel() {
  const [activePage, setActivePage] = useState("DashBoard")
  const [dataProfile, setDataProfile] = useState(null)
  const [addProducts, setAddProduct] = useState(null)
  
  useEffect(() => {
    const loadPageData = async () => {
      console.log("Active Page:", activePage)
      
      if (activePage === "Profile") {
        try {
          const profileData = await adminProfile()
          setDataProfile(profileData)
        } catch (error) {
          console.error("Failed to load profile:", error)
        }
      }
    }
    loadPageData()
  }, [activePage])
  
  return (
    <div>
        <AdminNavBar/>
        <div className='flex'>
          <div className="fixed top-18">
            <AdminSideBar  setActivePage={setActivePage}/>
          </div>
          <div className='w-full flex justify-center items-center bg-zinc-950 min-h-[calc(100vh)] pt-18'>
            <div>
            {activePage==="DashBoard" && <DashBoard />}
            {activePage==="Profile" && <Profile profileData={dataProfile}/>}
            {activePage==="Products" && <Products/>}
            {activePage==="Orders" && <Orders/>}
            {activePage==="Add Product" && <AddProduct response={addProducts}/>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminPanel