import axios from 'axios';
import { API_KEY } from '../utils/api-key';
  
const URL = 'https://api.themoviedb.org/3/genre/movie/list';
const params = new URLSearchParams({
  api_key: API_KEY,
});

async function fetchGenres() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.data.genres;
  } catch (error) {
    throw new Error(error.message);
  }
}


export { fetchGenres };