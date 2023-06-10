import { fetchTrendingMovies } from '../fetches/fetch-trendings';

const trendsList = document.querySelector('.home-trends-list');

function createMovieCard(movie) {
  const card = document.createElement('li');
  card.classList.add('home-trends-item');
  
  const poster = movie.poster_path;
  const title = movie.title;

  const markup = `
    <div class="home-trends-card">
      <img class="home-trends-card-poster" loading="lazy" src="https://image.tmdb.org/t/p/original/${poster}" alt="${title}">
      <h3 class="home-trends-title">${title}</h3>
      
      

    </div>

     `;

  
  
  card.innerHTML = markup;
  return card;
}

function renderMovieCards(movies) {
  const movieCards = movies.slice(0, 3).map(createMovieCard);
  movieCards.forEach(card => trendsList.appendChild(card));
}

async function fetchAndRenderTrendingMovies() {
  try {
    const trendingMovies = await fetchTrendingMovies();
    renderMovieCards(trendingMovies);
  } catch (error) {
    console.log(error.message);
  }
}

fetchAndRenderTrendingMovies();
