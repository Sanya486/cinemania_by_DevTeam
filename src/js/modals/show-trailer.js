import { fetchTrailer } from '../fetches/fetch-trailer';
import { cardId } from 'catalog.js';

const modal = document.querySelector('.modal');
const displayTrailer = async cardId => {
  try {
    const trailers = await fetchTrailer(cardId);

    if (trailers.length > 0) {
      const trailerContent = showTrailer(trailers[0].key);
      modal.innerHTML = trailerContent;
    } else {
      const errorContent = showError();
      modal.innerHTML = errorContent;
    }

  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};

const showTrailer = trailerKey => {
  const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
  return `
    <iframe src="${trailerUrl}" width="100%" height="100%"></iframe>
  `;
};

const showError = () => {
  return `
    <div class="trailer-error-info">
      <p>OOPS...</p>
      <p>We are very sorry!</p>
      <p>But we couldn't find the trailer.</p>
    </div>
    <img src="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png" alt="Trailer is not found" />
  `;
};

displayTrailer(cardId);
