import axios from 'axios';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import {rateArray} from './rate-markup';

import { fetchTrailers } from '../fetches/fetch-trailer';


const refs = {
    heroContainer: document.querySelector('.home-hero > .container'),
    trailerModal: document.querySelector('.trailer-modal'),
    trailerModalContent: document.querySelector('.trailer-modal-content'),
    moreDetail: document.querySelector('.modal-film-info'),
    poster : document.querySelector('.poster-img'),
    title : document.querySelector('.movie-title'),
    vote : document.querySelector('.vote'),
    votes : document.querySelector('.votes'),
    popularity : document.querySelector('.popularity'),
    genre : document.querySelector('.genre'),
    description : document.querySelector('.about p'),
    closeModalBtn:document.querySelector('.close-trailer-btn'),
}

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

        const moreDetailBtn = document.querySelector('.btn-call-film-info');
        moreDetailBtn.addEventListener('click', onMoreDetialClick);

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

  openModal(cardId);

}

function onMoreDetialClick (event) {

  const cardId = +event.target.dataset.id;
 
  openModalDetails(cardId);

  const closeModalBtn = document.querySelector('.modal-film-info .close-modal');
  closeModalBtn.addEventListener('click', closeMoreDetails);
}

function openModalDetails (cardId) {
  refs.moreDetail.classList.remove('is-hidden');
  markupMoreDetails(cardId);

  document.addEventListener('keydown', onEscapeMoreDetails);
}

function openModal (cardId) {                         
  refs.trailerModal.classList.remove('is-hidden');

  // const progress = restoreWatchProgress(cardId);
  watchTrailer(cardId);

  document.addEventListener('keydown', onEscape);
  refs.closeModalBtn.addEventListener('click', closeModal);
};

function closeMoreDetails () {
  refs.moreDetail.classList.add('is-hidden');

  document.removeEventListener('keydown', onEscapeMoreDetails);
}

function closeModal  () {
  refs.trailerModal.classList.add('is-hidden');

  refs.trailerModalContent.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
  refs.closeModalBtn.removeEventListener('click', closeModal);
};

function onEscapeMoreDetails(event){
  if (event.key === 'Escape') {
    closeMoreDetails();
  }
}

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

      const trailerContent = showTrailer(trailerKey);
      refs.trailerModalContent.innerHTML = `<div class="trailer-modal-content">${trailerContent}</div>`;
      // if (progress) {
      //   // saveWatchProgress(cardId, progress);
      // }
    } else {
      const errorContent = showError();
      refs.trailerModal.innerHTML = `<div class="trailer-modal-content">${errorContent}</div>`;
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

async function markupMoreDetails(currentId) {
  try {
    const movieDetails = await fetchMovieDetails(currentId);
    const markup = `<div class="poster"> 
          <img src="https://image.tmdb.org/t/p/original/${
            movieDetails.smallPoster
          }" class="poster-img" alt="the poster of the movie you have chosen"/>
        </div><div>
          <h1 class="movie-title">${
            movieDetails.title
          }</h1><div class="movie-info">
            <div class="info">
              <ul>
                <li>Vote / Votes</li>
                <li>Popularity</li>
                <li>Genre</li>
              </ul>
            </div><div class="params">
              <ul>
                <li>
                  <div class="vote">${movieDetails.voteAverage}</div>
                  /
                  <div class="votes">${movieDetails.voteCount}</div>
                </li>
                <li><span class="popularity">${movieDetails.popularity.toFixed(
                  1
                )}</span></li>
                <li><span class="genre">${movieDetails.genres}</span></li>  
              </ul>  
            </div>
          </div><div class="about">
            <h2>ABOUT</h2>
            <p>${movieDetails.overview}</p>
          </div><div class="btn-list">
            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller">Watch trailer</button>
            <button class="rm-dark-bcg-btn btn modal" id="btn-add-to-my-library">Add to my library</button>
          </div>
        </div>`;
    refs.wrap.innerHTML = markup;

  const btnatreiller = document.querySelector ('#btn-watch-treiller');
  const btnatlibrary = document.querySelector ('#btn-add-to-my-library')


  btnatreiller.addEventListener('click', OnWatchTrailerBtn);
  btnatlibrary .addEventListener('click', action);
  } catch (error) {
    console.log(error);
  }
}










