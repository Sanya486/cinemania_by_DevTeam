import { fetchTrendingMovies } from '../fetches/fetch-trending-movies';
import { cardMarkup } from './card-markup';

// Getting Markup for film-cards
const populateTrendingMovies = async () => {
  try {
    const trendingMovies = await fetchTrendingMovies();
    const cardList = document.querySelector('.card-list-search-result');
    let allCardsMarkup = '';

    for (const movie of trendingMovies) {
      try {
        const CardMarkup = await cardMarkup(movie);
        allCardsMarkup += CardMarkup;
      } catch (error) {
        console.log(error);
      }
    }

    cardList.insertAdjacentHTML('beforeend', allCardsMarkup);
  } catch (error) {
    console.log(error);
  }
};

// Attaching Listener to Catalog link in Header
const catalogLink = document.querySelector('.header-catalog');
catalogLink.addEventListener('click', async () => {
  await populateTrendingMovies();
});

// Saving of clicked Card ID for other functions
let cardId;

document.addEventListener('click', event => {
  const clickedMovieCard = event.target.closest('.film-card');
  if (clickedMovieCard) {
    cardId = clickedMovieCard.getAttribute('id');
  }
});

export { cardId };
