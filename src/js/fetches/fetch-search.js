import flatpickr from "flatpickr";


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchQuery = document.getElementById('searchQuery').value;
    const yearOfFilm = document.getElementById('yearOfFilm').value;

    makeBackendRequest(searchQuery, yearOfFilm);
  });

  function makeBackendRequest(query, year) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=3e1aa277fd6b8a3cd0a3e29dfce20a5c&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Backend response:', data);
        displaySearchResults(data.results);
      })
      .catch(error => {
        console.log('Error:', error);
    
      });
  }

  function displaySearchResults(results) {
    const cardList = document.querySelector('.card-list-search-result');


    cardList.innerHTML = '';

    results.forEach(result => {
      const cardItem = document.createElement('li');
      cardItem.classList.add('card-item-search-result');
      cardItem.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${result.poster_path}')`;
      cardList.appendChild(cardItem);
    });
  }

flatpickr("#yearOfFilm", {
    dateFormat: "Y",
    minDate: "2015",
    maxDate: "2023"
  })

  