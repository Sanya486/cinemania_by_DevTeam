import axios from 'axios';

const API_KEY = '3e1aa277fd6b8a3cd0a3e29dfce20a5c';
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
