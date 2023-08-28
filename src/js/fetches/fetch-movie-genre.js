import axios from 'axios';
import { API_KEY } from '../utils/api-key';

const URL = 'https://api.themoviedb.org/3/search/movie';

const fetchMovieGenre = async () => {
  const response = await axios.get(URL, {
    params: {
      api_key: API_KEY,
    },
  });

  const genreOptions = response.data.genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }));

  return genreOptions;
};

export { fetchMovieGenre };
