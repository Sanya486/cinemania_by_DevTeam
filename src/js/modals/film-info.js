import { fetchMovieDetails } from '../fetches/fetch-movie-details'

let num = 1375;

  const refs = {
    poster : document.querySelector('.poster img'),
    title : document.querySelector('.movie-title'),
    vote : document.querySelector('.vote'),
    votes : document.querySelector('.votes'),
    popularity : document.querySelector('.popularity'),
    genre : document.querySelector('.genre'),
    description : document.querySelector('.about p'),
  };

  console.log(refs.poster);

  fetchMovieDetails(num)
  .then(response => {
    // {
    // poster,
    // title,
    // description = overview,
    // vote = voteAverage,
    // votes = voteCount,
    // popularity,
    // genre = genres};

    console.log(response);
    let src = refs.poster;
    
    refs.title.innerHTML = `${response.title}`; 
    refs.vote.innerHTML = `${response.voteAverage}`;
    refs.votes.innerHTML = `${response.voteCount}`;
    refs.popularity.innerHTML = `${response.popularity}`;
    refs.genre.innerHTML = `${response.genres}`;
    refs.description.innerHTML = `${response.overview}`;
  })
  .catch(error => console.log(error));