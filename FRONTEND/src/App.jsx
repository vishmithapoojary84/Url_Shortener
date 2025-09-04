import React from 'react'


import Auth_pages from './pages/Auth_pages.jsx';
import Register_form from './components/Register_form.jsx';
import Home_page from './pages/Home_page.jsx';
import { Outlet } from '@tanstack/react-router';
import NavBar from './components/NavBar.jsx';

const RootLayout = () => {
  return (
    <>
<NavBar/>
<Outlet/>
      
    </>
  )
}

export default RootLayout;