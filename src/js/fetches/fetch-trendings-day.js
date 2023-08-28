import axios from 'axios';
import { API_KEY } from '../utils/api-key';


async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error)
  }
};

export { fetchTrendingMovies };
