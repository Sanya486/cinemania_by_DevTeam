import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTrendingMovies } from '../fetches/fetch-trendings';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import { cardMarkup } from './card-markup';

const refs = {
  heroContainer: document.querySelector('.home-hero > .container'),
  trailerModal: document.querySelector('.trailer-modal'),
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
            <button class="main-accent-sml-btn btn modal" id="btn-watch-treiller">Watch trailer</button>
            <button class="rm-dark-bcg-btn btn modal" id="btn-add-to-my-library">Add to my library</button>
          </div>
        </div>`;
    refs.wrap.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

/* додати клік по бекдропу і закриття*/
