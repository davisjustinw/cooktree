function getRecipes() {
  const headers = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  }
  fetch("http://localhost:3001/recipes", headers)
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.log)
}

export {
  getRecipes
}
