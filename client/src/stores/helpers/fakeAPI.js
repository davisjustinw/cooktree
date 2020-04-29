const fakeFetch = dispatch => {
  setTimeout(
    () => dispatch,
    3000
  )
}

export {
  fakeFetch
}
