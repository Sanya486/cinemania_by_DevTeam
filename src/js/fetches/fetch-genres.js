import axios from 'axios';
export { fetchGenres };
  
const URL = 'https://api.themoviedb.org/3/genre/movie/list';
const params = new URLSearchParams({
  api_key: '3e1aa277fd6b8a3cd0a3e29dfce20a5c',
});

async function fetchGenres() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.genres;
  } catch (error) {
    throw new Error(error.message);
  }
}
