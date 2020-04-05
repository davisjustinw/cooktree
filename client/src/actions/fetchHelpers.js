const url = 'http://localhost:3001'

const getHeader = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
}

const postHeader = body => ({
 method: 'POST',
 credentials: 'include',
 body: body
})


export {
  url,
  getHeader,
  postHeader
}
