import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Login from '../components/login/login'

export default function LoginPage() {
  return (
    <BrowserRouter>
   <Routes>
       <Route path='/login' element={<Login/>}/>
   </Routes>
    </BrowserRouter>
  )
}
