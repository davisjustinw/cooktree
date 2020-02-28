import React from 'react'

const Logout = props => {
  const handleSubmit = (event) => {
      event.preventDefault()

      const headers = {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }
      fetch("http://localhost:3001/logout", headers)
        .then(resp => resp.json())
        .then(console.log)
        .catch(console.log)
    }

  return (
    <button onClick={handleSubmit}>Logout</button>
  )
}

export default Logout;
