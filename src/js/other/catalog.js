import { fetchTrendingMovies } from '../fetches/fetch-trending-movies';
import { cardMarkup } from './card-markup';

const populateTrendingMovies = async () => {
  try {
    const trendingMovies = await fetchTrendingMovies();
    const cardList = document.querySelector('.card-list-search-result');
    let allFilmCards = '';

    for (const movie of trendingMovies) {
      try {
        const filmCard = await cardMarkup(movie.id);
        allFilmCards += `<li>${filmCard}</li>`;
      } catch (error) {
        console.log(error);
      }
    }

    cardList.insertAdjacentHTML('beforeend', allFilmCards);
  } catch (error) {
    console.log(error);
  }
};

const catalogLink = document.querySelector('.header-catalog');
catalogLink.addEventListener('click', async () => {
  await populateTrendingMovies();
});

let cardId;

document.addEventListener('click', event => {
  const clickedMovieCard = event.target.closest('.film-card');
  if (clickedMovieCard) {
    cardId = clickedMovieCard.getAttribute('id');
  }
});

export { cardId };
