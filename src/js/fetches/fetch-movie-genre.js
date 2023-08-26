import axios from 'axios';

const API_KEY = "21fa942e61d6ee3418d7f0261882e82d"
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
