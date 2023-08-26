import axios from 'axios';

  
const URL = 'https://api.themoviedb.org/3/genre/movie/list';
const params = new URLSearchParams({
  api_key: "21fa942e61d6ee3418d7f0261882e82d"
})

async function fetchGenres() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.data.genres;
  } catch (error) {
    throw new Error(error.message);
  }
}


export { fetchGenres };