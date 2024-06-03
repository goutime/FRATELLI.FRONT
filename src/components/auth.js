import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './Footer'
function Auth() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Auth