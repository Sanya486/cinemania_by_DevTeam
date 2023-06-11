import { fetchMovieDetails } from '../fetches/fetch-movie-details';
// import currentId from '';

// import axios from 'axios';

// const fetchMovieDetails = async (movieId) => {
//   const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';
//   const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

//     const response = await axios.get(URL);
//     const data = response.data;

//     const poster = data.backdrop_path;
//     const smallPoster = data.poster_path;
//     const title = data.title;
//     const overview = data.overview;
//     const voteAverage = data.vote_average;
//     const voteCount = data.vote_count;
//     const popularity = data.popularity;
//     const genres = data.genres.map((genre) => genre.name).join(', ');
//     const date = data.release_date;
//     const id = data.id;

//     return {
//       poster,
//       title,
//       overview,
//       voteAverage,
//       voteCount,
//       popularity,
//       genres,
//       date,
//       smallPoster,
//       id,
//     };
// };

  let currentId = 2023;

  const refs = {
    poster : document.querySelector('.poster img'),
    title : document.querySelector('.movie-title'),
    vote : document.querySelector('.vote'),
    votes : document.querySelector('.votes'),
    popularity : document.querySelector('.popularity'),
    genre : document.querySelector('.genre'),
    description : document.querySelector('.about p'),
    btnwtreiller : document.querySelector ('#btn-watch-treiller'),
    btnatlibrary : document.querySelector ('#btn-add-to-my-library'),
  };

  refs.btnwtreiller.addEventListener('click', action);
  refs.btnatlibrary .addEventListener('click', action);

  fetchMovieDetails(currentId)
  .then(response => {
    refs.poster.src = `https://image.tmdb.org/t/p/original/${response.smallPoster}`;
    refs.title.innerHTML = `${response.title}`; 
    refs.vote.innerHTML = `${response.voteAverage}`;
    refs.votes.innerHTML = `${response.voteCount}`;
    refs.popularity.innerHTML = `${response.popularity}`;
    refs.genre.innerHTML = `${response.genres}`;
    refs.description.innerHTML = `${response.overview}`;
  })
  .catch(error => console.log(error));

  function action() {
    return currentId
  };

  export { action }

