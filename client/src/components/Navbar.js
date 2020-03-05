import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

const Navbar = props => {
  return (
    <div>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/recipes">
        Recipes
      </NavLink>
      <Logout/>
    </div>
  )
}

export default Navbar
