import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { rateArray } from '../utils/rate-markup';

import { fetchTrailers } from '../fetches/fetch-trailer';
import { fetchTrendingMovies } from '../fetches/fetch-trendings-day';
import { markupMoreDetails } from '../utils/moreDetailsCardMarkup';
import { showTrailer } from '../utils/moreDetails';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModal: document.querySelector('.trailer-modal-backdrop'),
  trailerModalContent: document.querySelector('.trailer-modal-content'),
  trailerErrorImage: document.querySelector('.trailer-placeholder-default'),
  moreDetail: document.querySelector('.modal-film-info'),
  poster: document.querySelector('.poster-img'),
  title: document.querySelector('.movie-title'),
  vote: document.querySelector('.vote'),
  votes: document.querySelector('.votes'),
  popularity: document.querySelector('.popularity'),
  genre: document.querySelector('.genre'),
  description: document.querySelector('.about p'),
  closeModalBtn: document.querySelector('.close-trailer-btn'),
  wrap: document.querySelector('.flex'),
  body: document.querySelector('body'),
};

let arr = [];
let cardId;
let btnatlibrary;
let localArr = localStorage.getItem('films-id-array');
let filmInfo;

const viewportWidth = document.body.clientWidth;

window.addEventListener('load', onLoadHero);

//////--------------------------

function hidePreloader() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.remove();
  }
}

//////---------------------------

async function onLoadHero() {
  try {
    const films = await fetchTrendingMovies();
    const movieIds = films.map(movie => movie.id);
    const makeMarkUP = await makeMarkUpRandomFilm(movieIds);

    const watchTrailerBtn = document.getElementById('btn-watch-trailer');
    watchTrailerBtn.addEventListener('click', OnWatchTrailerBtn);

    const moreDetailBtn = document.querySelector('.btn-call-film-info');
    moreDetailBtn.addEventListener('click', onMoreDetialClick);
  } catch (error) {
   console.log(error.message)
  }
}

async function makeMarkUpRandomFilm(films) {
  try {
    const randomIndex = Math.floor(Math.random() * films.length);
    const randomId = films[randomIndex];
    filmInfo = await fetchMovieDetails(randomId);
    markUpApiHero(filmInfo);
  } catch (error) {
    console.log(error.message);
  }
}

function markUpApiHero(filmInfo) {
  const { title, overview, smallPoster, poster, voteAverage, id } = filmInfo;
  const roundedRating = Math.round(voteAverage);

  const quaryRate = rateArray(roundedRating);
  const rateMarkup = quaryRate
    .map(
      elem =>
        `<li class="rating-item">
               <img class="rating-icon" src="${elem}" alt="">
               </li>`
    )
    .join('');

  const markUp = `<div class="home-hero-api-movie">
      <div class="home-hero-api-movie-con"><h2 class="home-hero-api-movie-name">${title}</h2>
    <div class="home-hero-api-movie-rating">
      <ul class="film-rating-hero">
        ${rateMarkup}
      </ul>
    </div>
    <p class="home-hero-api-movie-description">
      ${overview}
    </p>
    <div class="home-hero-api-movie-btns">
    <button class="main-accent-sml-btn btn" id='btn-watch-trailer' data-id="${id}">Watch trailer</button>
    <button class="rm-light-bcg-btn btn btn-call-film-info" data-id="${id}">More details </button>
    </div>
  </div>
  <div class="home-hero-api-movie-bg">
    <img loading="lazy"
      src="https://image.tmdb.org/t/p/original/${smallPoster}"
      srcset="
        https://image.tmdb.org/t/p/original/${smallPoster}  320w,
        https://image.tmdb.org/t/p/original/${poster}  768w,
        https://image.tmdb.org/t/p/original/${poster} 1280w
      "
      sizes="(max-width: 320px) 320px,
          (max-width: 768px) 380px,
          1280px"
      alt="${title}"
    />
    </div>
    </div>`;

  refs.heroContainer.insertAdjacentHTML('beforeend', markUp);
  hidePreloader();
}

function OnWatchTrailerBtn(event) {
  const cardId = +event.target.dataset.id;
  openModal(cardId);
}

function onMoreDetialClick(event) {
  cardId = +event.target.dataset.id;
  openModalDetails(cardId);
  const closeModalBtn = document.querySelector('.modal-film-info .close-modal');
  closeModalBtn.addEventListener('click', closeMoreDetails);
}

function openModalDetails(cardId) {
  refs.moreDetail.classList.remove('is-hidden');
  refs.body.style.overflow = 'hidden';
  onShowMoreDetails(cardId);
  document.addEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.addEventListener('click', closeOnBacdropMoreDetails);
}

function closeOnBacdropMoreDetails(e) {
  closeOnBackdropClick(e, closeMoreDetails);
}

function openModal(cardId) {
  refs.trailerModal.classList.remove('is-hidden');
  refs.body.style.overflow = 'hidden';
  watchTrailer(cardId);
  document.addEventListener('keydown', onEscape);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.trailerModal.addEventListener('click', closeBackdropOnwWatchTrailer);
}

function closeBackdropOnwWatchTrailer(e) {
  closeOnBackdropClick(e, closeModal);
}

function closeOnBackdropClick(e, callback) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    callback();
  }
}

function closeMoreDetails() {
  refs.moreDetail.classList.add('is-hidden');
  refs.body.style.overflow = 'auto';
  document.removeEventListener('keydown', onEscapeMoreDetails);
  refs.moreDetail.removeEventListener('click', closeOnBacdropMoreDetails);
}

function closeModal() {
  refs.trailerModal.classList.add('is-hidden');
  refs.body.style.overflow = 'auto';
  refs.trailerModalContent.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
  refs.closeModalBtn.removeEventListener('click', closeModal);
  refs.trailerModal.removeEventListener('click', closeBackdropOnwWatchTrailer);
}

function onEscapeMoreDetails(event) {
  if (event.key === 'Escape') {
    closeMoreDetails();
  }
}

function onEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

async function watchTrailer(cardId) {
  try {
    const trailers = await fetchTrailers(cardId);

    if (trailers.length > 0) {
      const trailerKey = trailers[0].key;
      const trailerContent = showTrailer(trailerKey);
      refs.trailerModalContent.innerHTML = trailerContent;
    } else {
      showErrorModal();
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
    showErrorModal();
  }
}

function showErrorModal() {
  const errorContent = `
    <div class="error-mode-content">
      <div class="trailer-error-info">
        <p>OOPS...</p>
        <p>We are very sorry!</p>
        <p>But we couldn't find the trailer.</p>
      </div>
  `;
  trailerErrorImage.classList.remove('is-hidden');
  refs.trailerModalContent.innerHTML = errorContent;
}

async function onShowMoreDetails(currentId) {
  try {
    const markup = await markupMoreDetails(currentId);
    refs.wrap.innerHTML = markup;

    const btnatreiller = document.querySelector('#btn-watch-treiller');
    btnatlibrary = document.querySelector('#btn-add-to-my-library');

    btnatreiller.addEventListener('click', OnWatchTrailerBtn);
    btnatlibrary.addEventListener('click', action);

    onCheckLocalStorage();
  } catch (error) {
    console.log(error);
  }
}
function onCheckLocalStorage() {
  if (JSON.parse(localArr).includes(cardId)) {
    toggleBtnStyles('Remove from my library');
  }
  if (localArr === null) {
    toggleBtnStyles('Add to my library');
  }
}

function action() {
  localArr = localStorage.getItem('films-id-array');
  try {
    if (localArr === null) {
      arr.push(cardId);
      localStorage.setItem('films-id-array', JSON.stringify(arr));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Remove from my library');
      return;
    }
    let parseLocalStorage = JSON.parse(localArr);

    if (!parseLocalStorage.includes(cardId)) {
      parseLocalStorage.push(cardId);
      localStorage.setItem('films-id-array', JSON.stringify(parseLocalStorage));
      localArr = localStorage.getItem('films-id-array');
      toggleBtnStyles('Remove from my library');
      return;
    }
    if (parseLocalStorage.includes(cardId)) {
      const idx = parseLocalStorage.indexOf(cardId);
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
  btnatlibrary.textContent = text;
}
