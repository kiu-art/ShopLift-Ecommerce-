import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import AdminRegisterPage from './pages/AdminRegisterPage'
import AdminLoginPage from './pages/AdminLoginPage'


function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin/register' element={<AdminRegisterPage/>}/>
          <Route path='/admin/login' element={<AdminLoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
