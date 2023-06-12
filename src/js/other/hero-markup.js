import axios from 'axios';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import {rateArray} from './rate-markup';

import { fetchTrailers } from '../fetches/fetch-trailer';

const refs = {
    heroContainer: document.querySelector('.home-hero > .container'),
}
const modal = document.querySelector('.trailer-modal')

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';
const timeWindow = 'day';

const fetchTrendingDayMovies = async () => {
    const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
    );

    const data = response.data;
    const movieIds = data.results.map(movie => movie.id);
    
    return movieIds;
};

window.addEventListener('load', onLoadHero);

async function onLoadHero() {
    try {
        const films = await fetchTrendingDayMovies();
        const makeMarkUP = await makeMarkUpRandomFilm(films);

        const watchTrailerBtn = document.getElementById('btn-watch-trailer');
        watchTrailerBtn.addEventListener('click', OnWatchTrailerBtn);

    } catch(error) {
        throw new Error(error.message);
    }
}

async function makeMarkUpRandomFilm(films) {
    try {
        const randomIndex = Math.floor(Math.random() * films.length);
        const randomId = films[randomIndex];
        const filmInfo = await fetchMovieDetails(randomId);
        markUpApiHero(filmInfo);
        
    } catch(error) {
        throw new Error(error.message);
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
    <img
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

    refs.heroContainer.innerHTML = markUp;
    
}

function OnWatchTrailerBtn  (event) {
  const cardId = +event.target.dataset.id;

  console.log(cardId)

  openModal(cardId);

  const closeModalBtn = document.querySelector('.close-trailer-btn');
  closeModalBtn.addEventListener('click', closeModal);
}

function openModal (cardId) {                         
  modal.classList.remove('is-hidden');
  isModalOpen = true;
  // const progress = restoreWatchProgress(cardId);
  watchTrailer(cardId);

  document.addEventListener('keydown', onEscape);
};

function closeModal  () {
  modal.classList.add('is-hidden');
  isModalOpen = false;
  modal.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
};

function onEscape (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

async function watchTrailer (cardId) {
  try {
    const trailers = await fetchTrailers(cardId);

    if (trailers.length > 0) {
      const trailerKey = trailers[0].key;

      console.log(trailerKey)

      const trailerContent = showTrailer(trailerKey);
      modal.innerHTML = `<div class="trailer-modal-content">${trailerContent}</div>`;
      // if (progress) {
      //   // saveWatchProgress(cardId, progress);
      // }
    } else {
      const errorContent = showError();
      modal.innerHTML = `<div class="trailer-modal-content">${errorContent}</div>`;
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};
function showTrailer (trailerKey){
  return `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
};

function showError () {
  return `
    <div class="trailer-error-info">
      <p>OOPS...</p>
      <p>We are very sorry!</p>
      <p>But we couldn't find the trailer.</p>
    </div>
    <picture>
      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" 
              media="(max-width: 320px)">
      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" 
              media="(max-width: 768px)">
      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" 
              media="(min-width: 769px)">
      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">
    </picture>
    </div>
  `;
};


// // Функція для збереження місця зупинки в Трейлері
// function saveWatchProgress (cardId, progress) {
//   const progressKey = `watchProgress_${cardId}`;
//   localStorage.setItem(progressKey, progress);
// };

// // Функція для відновлення перегляду з місця зупинки
// function restoreWatchProgress (cardId) {
//   const progressKey = `watchProgress_${cardId}`;
//   return localStorage.getItem(progressKey);
// };









