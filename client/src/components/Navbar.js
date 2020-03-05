import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = ({ user }) => {

  return (
    <div>
      { user ? (
        <NavLink to="/logout">
          Logout
        </NavLink>
      ) :(
        <NavLink to="/login">
          Login
        </NavLink>
      )}
      <NavLink to="/recipes">
        Recipes
      </NavLink>

    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ user: auth.user })
export default connect(mapStateToProps)(Navbar)
