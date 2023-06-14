import { fetchMovieDetails } from '../fetches/fetch-movie-details';

const refs = {
  poster: document.querySelector('.poster-img'),
  title: document.querySelector('.movie-title'),
  vote: document.querySelector('.vote'),
  votes: document.querySelector('.votes'),
  popularity: document.querySelector('.popularity'),
  genre: document.querySelector('.genre'),
  description: document.querySelector('.about p'),
  footer: document.querySelector('.footer'),
};

async function markupMoreDetails(currentId) {
  try {
    const movieDetails = await fetchMovieDetails(currentId);
    refs.poster.src = `https://image.tmdb.org/t/p/original/${movieDetails.smallPoster}`;
    refs.title.innerHTML = `${movieDetails.title}`;
    refs.vote.innerHTML = `${movieDetails.voteAverage}`;
    refs.votes.innerHTML = `${movieDetails.voteCount}`;
    refs.popularity.innerHTML = `${movieDetails.popularity}`;
    refs.genre.innerHTML = `${movieDetails.genres}`;
    refs.description.innerHTML = `${movieDetails.overview}`;

    const btnwtreiller = document.querySelector('#btn-watch-treiller');
    const btnatlibrary = document.querySelector('#btn-add-to-my-library');

    btnwtreiller.addEventListener('click', action);
    btnatlibrary.addEventListener('click', action);
  } catch (error) {
    console.log(error);
  }
}

// export { markupMoreDetails };
