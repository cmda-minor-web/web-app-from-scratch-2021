(function () {
  const apiKey = 'lbhvcWW7O-NY5XERiGF9BrvC2L05e-MWIjagBBsXr9A'

  const searchForm = document.querySelector('form')
  searchForm.addEventListener('submit', e => {
    e.preventDefault()
    if (search.value) searchImages(search.value)
  })

  function getRandomImage() {
    const apiURL = 'https://api.unsplash.com/photos/random/'
  
    return fetch(`${apiURL}?client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => console.log(data.urls.regular))
      .catch(err => console.log('Something went wrong', err))
  }
  
  function searchImages(query) {
    const apiURL = 'https://api.unsplash.com/search/photos/'
  
    return fetch(`${apiURL}?query=${query}&client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('Something went wrong', err))
  }
})()