import axios from 'axios';
import placeholder from '../../images/components/post-holder.jpg'
import { API_KEY } from '../utils/api-key';

const fetchMovieDetails = async (movieId) => {

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  
    const response = await axios.get(URL);
  const data = response.data;


  let smallPoster = !data.poster_path? placeholder : `https://image.tmdb.org/t/p/w400/${data.poster_path}`
    const poster = data.backdrop_path;
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
