import React from 'react'
import MainNavigatiom from './main-navigation'

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigatiom />
      <main>{children}</main>
    </>
  )
}

export default Layout
