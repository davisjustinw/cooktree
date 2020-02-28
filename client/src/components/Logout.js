import React from 'react'

const Logout = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.submitLogout()
  }

  return (
    <button onClick={handleSubmit}>Logout</button>
  )
}

export default Logout;
