import axios from 'axios';
export { fetchUpcoming };

const URL = 'https://api.themoviedb.org/3/movie/upcoming';
const params = new URLSearchParams({
  api_key: '3e1aa277fd6b8a3cd0a3e29dfce20a5c',
});

async function fetchUpcoming() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}