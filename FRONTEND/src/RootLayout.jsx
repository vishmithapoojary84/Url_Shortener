import React from 'react'
import HomePage from './pages/Home_page.jsx'
import LoginForm from './components/Login_form.jsx'
import AuthPage from './pages/Auth_pages.jsx'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar.jsx'

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout