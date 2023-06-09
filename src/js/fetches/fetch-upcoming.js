import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { fetchUpcoming };
import { fetchMovieDetails } from './fetch-movie-details';

const URL = 'https://api.themoviedb.org/3/movie/upcoming';
const params = new URLSearchParams({
  api_key: '3e1aa277fd6b8a3cd0a3e29dfce20a5c',
});

async function fetchUpcoming() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}

const refs = {
  filmBlock: document.querySelector('.home-upcoming-film-wrap-js'),
};

window.addEventListener('load', onLoadPage);

async function onLoadPage() {
  try {
    const films = await fetchUpcoming();
    if (films.length === 0) {
      Notify.failure("We are sorry but we don't have any upcoming films");
      return;
    }
    onChooseCurrentFilm(films);
  } catch (error) {
    onError(error);
  }
}

async function onChooseCurrentFilm(films) {
  const randomFilm = Math.floor(Math.random() * 20);
  const filmId = films.slice(randomFilm, randomFilm + 1)[0].id;
  try {
    const filmInfo = await fetchMovieDetails(filmId);
    onRenderMarkup(filmInfo);
  } catch (error) {
    onError(error);
  }
}

function onRenderMarkup(film) {
  const currentPoster = onCheckViewport();
  const poster = onCheckCurrentPoster(currentPoster, film);
  const markup = `<div class="home-upcoming-film-poster-wrap"><div class="home-upcoming-film-poster-overlay"></div><img class="home-upcoming-film-poster" src="${poster}"></div><div class="home-upcoming-film-info-wrap">
          <h3 class="home-upcoming-film-title text">${film.title}</h3>
            <ul class="home-upcoming-film-info-list">
              <li class="home-upcoming-film-info-item">
                <div class="home-upcoming-film-info-item-wrap">
                  <p class="home-upcoming-film-info-item-text text">Release date</p>
                </div>
                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-date text">${film.date
                  .split('-')
                  .reverse()
                  .join('.')}</p></div>
              </li>
              <li class="home-upcoming-film-info-item">
                <div class="home-upcoming-film-info-item-wrap">
                  <p class="home-upcoming-film-info-item-text text">Vote / Votes</p>
                </div>
                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-rating text light-theme-color"><span class="home-upcoming-film-info-rating-number text">${film.voteAverage.toFixed(
                  1
                )}</span>/<span class="home-upcoming-film-info-rating-number text">${
    film.voteCount
  }</span></p></div></li>
              <li class="home-upcoming-film-info-item">
                <div class="home-upcoming-film-info-item-wrap">
                  <p class="home-upcoming-film-info-item-text text">Popularity</p>
                </div>
                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-popularity text light-theme-color">${film.popularity.toFixed(
                  1
                )}</p></div>
              </li>
              <li class="home-upcoming-film-info-item">
                <div class="home-upcoming-film-info-item-wrap">
                  <p class="home-upcoming-film-info-item-text text">Genre</p>
                </div>
                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-genres text light-theme-color">${film.genres
                  .split(' ')
                  .join(', ')}</p></div>
              </li>
            </ul>
          <p class="home-upcoming-film-about text">About</p>
          <p class="home-upcoming-film-about-text text">Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.</p>
          <button class="main-accent-sml-btn btn" type="button">Add to my library</button>
        </div>`;
  refs.filmBlock.innerHTML = markup;
}

function onCheckViewport() {
  const TABLET = window.matchMedia('(min-width: 768px)');
  if (TABLET.matches) {
    const currentPoster = 'poster';
    return currentPoster;
  }
  const currentPoster = 'smallPoster';
  return currentPoster;
}

function onCheckCurrentPoster(currentPoster, film) {
  if (currentPoster === 'poster') {
    return `https://image.tmdb.org/t/p/original/${film.poster}`;
  }
  return `https://image.tmdb.org/t/p/original/${film.smallPoster}`;
}

function onError(error) {
  console.log(error.message);
}
