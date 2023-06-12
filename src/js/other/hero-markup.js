import axios from 'axios';
import { fetchMovieDetails } from '../fetches/fetch-movie-details';
import {rateArray} from './rate-markup';

const refs = {
    heroContainer: document.querySelector('.home-hero > .container'),
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
        makeMarkUpRandomFilm(films);
        
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