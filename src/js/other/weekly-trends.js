import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTrendingMovies } from '../fetches/fetch-trendings';
import { fetchTrailers } from '../fetches/fetch-trailer';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { cardMarkup } from './card-markup';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModal: document.querySelector('.trailer-modal'),
  trailerModalContent: document.querySelector('.trailer-modal-content'),
  moreDetail: document.querySelector('.modal-film-info'),
  poster: document.querySelector('.poster-img'),
  title: document.querySelector('.movie-title'),
  vote: document.querySelector('.vote'),
  votes: document.querySelector('.votes'),
  popularity: document.querySelector('.popularity'),
  genre: document.querySelector('.genre'),
  // description: document.querySelector('.about p'),
  // footer: document.querySelector('.footer'),
  wrap: document.querySelector('.flex'),
  closeModalBtn: document.querySelector('.modal-film-info .close-modal'),
  closeTrailerBtn: document.querySelector('.close-trailer-btn')
};

const homeTrendsList = document.querySelector('.home-trends-list');
window.addEventListener('load', onLoad);
refs.closeModalBtn.addEventListener('click', closeMoreDetails);


async function onLoad() {
  try {
    const movies = await fetchTrendingMovies();
    if (movies.length === 0) {
      Notify.failure("We are sorry but we don't have any upcoming films");
      return;
    }
    const randomFilmsArr = onChooseRandomFilms(movies);
    onRenderMarkup(randomFilmsArr);
  } catch (error) {
    console.log(error.message);
  }
}

async function onRenderMarkup(randomFilmsArr) {
  try {
    const movieCards = await Promise.all(
      randomFilmsArr.map(async movie => {
        const card = await cardMarkup(movie.id);
        return card;
      })
    );
    homeTrendsList.innerHTML = movieCards.join('');
    onAddEventListener();
  } catch (error) {
    console.log(error.message);
  }
}

function onChooseRandomFilms(movies) {
  const randomFirstFilm = Math.floor(Math.random() * 5);
  const randomFilmsArr = movies.slice(randomFirstFilm, randomFirstFilm + 3);
  return randomFilmsArr;
}

function onAddEventListener() {
  let cardsArrRef = document.querySelectorAll('.film-card');
  for (const card of cardsArrRef) {
    card.addEventListener('click', onClick);
  }
  console.log(cardsArrRef);
}

function onClick(e) {
  e.preventDefault();
  const cardId = +e.currentTarget.id;
  openModalDetails(cardId);

}

function openModalDetails(cardId) {
  refs.moreDetail.classList.remove('is-hidden');
  markupMoreDetails(cardId);

  document.addEventListener('keydown', onEscapeMoreDetails);
}

function closeMoreDetails () {
  refs.moreDetail.classList.add('is-hidden');
  isModalOpen = false;
  document.removeEventListener('keydown', onEscapeMoreDetails);
}

function onEscapeMoreDetails(e) {
  if (e.key === 'Escape') {
    closeMoreDetails();
  }
}

async function markupMoreDetails(currentId) {
  try {
    const movieDetails = await fetchMovieDetails(currentId);
    const markup = `<div class="poster"> 
          <img src="https://image.tmdb.org/t/p/original/${movieDetails.smallPoster}" class="poster-img" alt="the poster of the movie you have chosen"/>
        </div><div>
          <h1 class="movie-title">${movieDetails.title}</h1><div class="movie-info">
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
                <li><span class="popularity">${movieDetails.popularity}</span></li>
                <li><span class="genre">${movieDetails.genres}</span></li>  
              </ul>  
            </div>
          </div><div class="about">
            <h2>ABOUT</h2>
            <p>${movieDetails.overview}</p>
          </div><div class="btn-list">
            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller" data-id="${currentId}">Watch trailer</button>
            <button class="rm-dark-bcg-btn btn modal" id="btn-add-to-my-library">Add to my library</button>
          </div>
        </div>`;
    refs.wrap.innerHTML = markup;

    const btnatreiller = document.querySelector('#btn-watch-treiller');
    const btnatlibrary = document.querySelector('#btn-add-to-my-library');

    btnatreiller.addEventListener('click', OnWatchTrailerBtn);
    btnatlibrary.addEventListener('click', action);
  } catch (error) {
    console.log(error);
  }
}


function OnWatchTrailerBtn(event) {
  const cardId = +event.target.dataset.id;
  console.log(cardId)
  openModal(cardId);
}
/* додати клік по бекдропу і закриття*/

function openModal(cardId) {
  refs.trailerModal.classList.remove('is-hidden');

  // const progress = restoreWatchProgress(cardId);
  watchTrailer(cardId);

  document.addEventListener('keydown', onEscape);
  refs.closeTrailerBtn.addEventListener('click', closeModal);
}

async function watchTrailer(cardId) {
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
}
function showTrailer(trailerKey) {
  return `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}

function showError() {
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
}

function onEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  refs.trailerModal.classList.add('is-hidden');

  refs.trailerModalContent.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
  refs.closeModalBtn.removeEventListener('click', closeModal);
}