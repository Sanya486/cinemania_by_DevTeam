import axios from 'axios';
import { API_KEY } from '../utils/api-key';

export { fetchUpcoming };

const URL = 'https://api.themoviedb.org/3/movie/upcoming';
const params = new URLSearchParams({
  api_key: API_KEY,
});

async function fetchUpcoming() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.data.results;
  } catch (error) {
    console.log(error)
  }
}