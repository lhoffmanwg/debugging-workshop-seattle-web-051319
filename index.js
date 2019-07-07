document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')


  let joke;

  function fetchJoke(){

    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    const username = document.getElementById('name-input').value
    const newJokeLi = document.createElement('li')

    event.preventDefault();
    if(username === ""){
      alert("enter your name")
      return;}

    fetchJoke().then(joke => {
    newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
    jokeList.appendChild(newJokeLi)
  })
})
})
