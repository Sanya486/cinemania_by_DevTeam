import axios from 'axios';

const fetchMovieDetails = async (movieId) => {
  const API_KEY = "21fa942e61d6ee3418d7f0261882e82d"
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  
    const response = await axios.get(URL);
    const data = response.data;

    const poster = data.backdrop_path;
    const smallPoster = data.poster_path;
    const title = data.title;
    const overview = data.overview;
    const voteAverage = data.vote_average;
    const voteCount = data.vote_count;
    const popularity = data.popularity;
    const genres = data.genres.map((genre) => genre.name).join(', ');
    const date = data.release_date;
    const id = data.id;

    return {
      poster,
      title,
      overview,
      voteAverage,
      voteCount,
      popularity,
      genres,
      date,
      smallPoster,
      id,
    };
};

export { fetchMovieDetails };
