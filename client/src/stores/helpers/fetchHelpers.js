const url = 'http://localhost:3001'

const getHeader = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
}

const getHeaderAnon = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const jsonPostHeader = body => ({
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

const postHeader = body => ({
 method: 'POST',
 credentials: 'include',
 body: body
})

export {
  url,
  getHeader,
  postHeader,
  jsonPostHeader,
  getHeaderAnon
}
