import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './Layout.scss'

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default Layout

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <NavigationItems />
    </nav>
  )
}
const Logo = () => <p className="logo">MegaRepo</p>

const NavigationItems = () => {
  return (
    <ul>
      <NavLink to="/">Full map</NavLink>
      <NavLink to="/guides">Guides</NavLink>
      <NavLink to="/contribute">Contribution guide</NavLink>
      <NavLink to="/thanks">Thanks</NavLink>
    </ul>
  )
}
