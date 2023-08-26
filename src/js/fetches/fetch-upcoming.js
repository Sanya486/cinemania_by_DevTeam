import axios from 'axios';
export { fetchUpcoming };

const URL = 'https://api.themoviedb.org/3/movie/upcoming';
const params = new URLSearchParams({
  api_key: "21fa942e61d6ee3418d7f0261882e82d"
})

async function fetchUpcoming() {
  try {
    const response = await axios.get(`${URL}?${params}`);
    return response.data.results;
  } catch (error) {
    console.log(error)
  }
}