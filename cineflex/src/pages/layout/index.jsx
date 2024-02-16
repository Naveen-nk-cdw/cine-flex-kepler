import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

const Layout = () => {
  //layout to all pages
  return (
    <>
        <Header/>
        <Outlet/>
    </>
    
  )
}

export default Layout