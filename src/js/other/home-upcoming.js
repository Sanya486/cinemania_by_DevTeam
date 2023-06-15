import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { fetchUpcoming } from '../fetches/fetch-upcoming';
export { homeUpcoming };

const refs = {
  filmBlock: document.querySelector('.home-upcoming-film-wrap-js'),
};
let filmInfo;
let arr = [];
let btnRef;
let localArr = localStorage.getItem('films-id-array');

window.addEventListener('load', onLoadPage);
let portrait = window.matchMedia('(orientation: portrait)');
portrait.addEventListener('change', onCheckOrientation);

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
    filmInfo = await fetchMovieDetails(filmId);
    onGetDataAndCallRender(filmInfo);
    onAddBtnListener();
    onCheckLocalStorage();
  } catch (error) {
    onError(error);
  }
}

function onRenderMarkup(film, posterType, vote) {
  const markup = `<div class="home-upcoming-film-poster-wrap"><div class="home-upcoming-film-poster-overlay"></div><img class="home-upcoming-film-poster" src="${posterType}"></div><div class="home-upcoming-film-info-wrap">
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
                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-rating text light-theme-color"><span class="home-upcoming-film-info-rating-number text">${vote}</span>/<span class="home-upcoming-film-info-rating-number text">${
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
                <div class="home-upcoming-film-info-item-wrap"><p class="home-upcoming-film-info-genres text light-theme-color">${
                  film.genres
                }</p></div>
              </li>
            </ul>
          <p class="home-upcoming-film-about text">About</p>
          <p class="home-upcoming-film-about-text text">Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.</p>
          <button class="main-accent-sml-btn btn home-upcoming-btn-js" type="button">Add to my library</button>
        </div>`;
  refs.filmBlock.innerHTML = markup;
}

function onGetDataAndCallRender(film) {
  const voteAv = onCheckRating(film);
  const currentPoster = onCheckViewport();
  const poster = onCheckCurrentPoster(currentPoster, film);
  onRenderMarkup(film, poster, voteAv);
}

function onCheckRating(film) {
  if (film.voteAverage === 0) {
    const voteAv = '-';
    film.voteCount = '-';
    return voteAv;
  }
  const voteAv = film.voteAverage.toFixed(1);
  return voteAv;
}

function onCheckViewport() {
  const TABLET = window.matchMedia('(min-width: 768px)');
  if (TABLET.matches) {
    return 'poster';
  }
  return 'smallPoster';
}

function onCheckOrientation(e) {
  let poster;
  if (e.matches) {
    poster = `https://image.tmdb.org/t/p/original/${filmInfo.smallPoster}`;
  } else {
    poster = `https://image.tmdb.org/t/p/original/${filmInfo.poster}`;
  }
  try {
    const voteAv = onCheckRating(filmInfo);
    onRenderMarkup(filmInfo, poster, voteAv);
    onAddBtnListener();
    onCheckLocalStorage();
  } catch (error) {
    onError(error);
  }
}

function onCheckCurrentPoster(currentPoster, film) {
  if (currentPoster === 'poster') {
    return `https://image.tmdb.org/t/p/original/${film.poster}`;
  }
  return `https://image.tmdb.org/t/p/original/${film.smallPoster}`;
}

function onAddBtnListener() {
  btnRef = document.querySelector('.home-upcoming-btn-js');
  btnRef.addEventListener('click', onAddIdFilmInLocaleStorage);
}

function onCheckLocalStorage() {
  if (JSON.parse(localArr).includes(filmInfo.id)) {
    toggleBtnStyles('Remove from my library');
  }
  if (localArr === null) {
    toggleBtnStyles('Add to my library');
  }
}

function onAddIdFilmInLocaleStorage() {
  localArr = localStorage.getItem('films-id-array');
  try {
    if (localArr === null) {
      arr.push(filmInfo.id);
      localStorage.setItem('films-id-array', JSON.stringify(arr));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Remove from my library');
      return;
    }
    let parseLocalStorage = JSON.parse(localArr);

    if (!parseLocalStorage.includes(filmInfo.id)) {
      parseLocalStorage.push(filmInfo.id);
      localStorage.setItem('films-id-array', JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Remove from my library');
      return;
    }
    if (parseLocalStorage.includes(filmInfo.id)) {
      const idx = parseLocalStorage.indexOf(filmInfo.id);
      parseLocalStorage.splice(idx, 1);
      localStorage.setItem('films-id-array', JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Add to my library');
    }
  } catch (error) {
    Notify.failure('Please, try one more time');
  }
}

function toggleBtnStyles(text) {
  btnRef.textContent = text;
  btnRef.classList.toggle('remove-js');
  btnRef.classList.toggle('main-accent-sml-btn');
}

function onError(error) {
  console.log(error.message);
}
