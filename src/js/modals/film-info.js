import { fetchMovieDetails } from '../fetches/fetch-movie-details';
// export { filmInfo };
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

// let currentId = 2023;

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
    console.log(movieDetails);
    console.log(refs.poster);
    console.log(refs.footer);
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
