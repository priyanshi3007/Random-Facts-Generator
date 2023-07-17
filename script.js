'use strict'
const btn = document.getElementById('12')
const a = document.getElementById('p')

let loadPage = () => {
  let fact = fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
    method: "GET",
    headers: {
      "x-api-key": "RqpCE6XEryIHIEi10kCbWw==yT5s5YTkyyrEPfvS"
    }
  })
  fact.then(fct => {
    if (fct.ok) {
      console.log("Success")
      console.log("Status:", fct.status)
      return fct.json()
    }
    else {
      console.log("Unsuccessful")
    }
  }).then((data) => {
    console.log(data)
    a.innerHTML = data[0].fact + "."
  })
}
window.addEventListener('load', loadPage)
btn.addEventListener('click', loadPage)

