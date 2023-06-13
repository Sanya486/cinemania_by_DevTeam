import { fetchTrendingMovies } from '../fetches/fetch-trendings';
import { cardMarkup } from './card-markup';
import { fetchTrailers } from '../fetches/fetch-trailer';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { cardMarkup } from './card-markup';

let arr = [];
let cardId;
let btnatlibrary;
let localArr = localStorage.getItem('films-id-array');

window.addEventListener('load', populateTrendingMovies);

async function populateTrendingMovies ()  {
  try {
    const trendingMovies = await fetchTrendingMovies();
    const cardList = document.querySelector('.card-list-search-result');
    let allFilmCards = '';
    console.log(trendingMovies);

    for (const movie of trendingMovies) {
      try {
        const filmCard = await cardMarkup(movie.id);
        allFilmCards += `<li>${filmCard}</li>`;
      } catch (error) {
        console.log(error);
      }
    }

    cardList.insertAdjacentHTML('beforeend', allFilmCards);
    onAddEventListener();
  } catch (error) {
  }
};

export { cardId };
