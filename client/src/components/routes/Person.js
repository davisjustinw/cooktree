import React from 'react'

const Person = (props) => {
  const classes = useStyles()
  console.log('Person')
  console.log(props)
  //console.log(`match url: ${match.url}`)
  //const personId = match.params.personId

  return (
    <>
      <h1>Person</h1>
    </>
  )
}

export default Person
