import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import AdminRegisterPage from './pages/admin/AdminRegisterPage'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import HomePage from './pages/HomePage'
import AdminPanel from './pages/Admin/AdminPanel'
import SearchPage from './pages/SearchPage'
import ProductViewPage from './pages/ProductViewPage'


function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin/register' element={<AdminRegisterPage/>}/>
          <Route path='/admin/login' element={<AdminLoginPage/>}/>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/admin/panel' element={<AdminPanel/>}></Route>
          <Route path='/user/search' element={<SearchPage/>}></Route>
          <Route path='/user/product/:productId' element={<ProductViewPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
