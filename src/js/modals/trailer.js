import { fetchTrailers } from '../fetches/fetch-trailer';

const modal = document.querySelector('.trailer-modal')
const watchTrailerBtn = document.getElementById('btn-watch-trailer');



let isModalOpen = false;

const openModal = cardId => {                         
  modal.classList.remove('is-hidden');
  isModalOpen = true;
  const progress = restoreWatchProgress(cardId);
  watchTrailer(cardId, progress);
};

const closeModal = () => {
  modal.classList.add('is-hidden');
  isModalOpen = false;
  modal.innerHTML = '';
};


watchTrailerBtn.addEventListener('click', OnWatchTrailerBtn);


function OnWatchTrailerBtn  (event) {
  const cardId = event.target.dataset.cardId;
  openModal(cardId);
  const closeModalBtn = document.querySelector('.close-trailer-btn');
  closeModalBtn.addEventListener('click', closeModal);
}


document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

document.addEventListener('click', event => {
  if (isModalOpen && event.target !== modal && !modal.contains(event.target)) {
    closeModal();
  }
});

modal.addEventListener('click', event => {
  event.stopPropagation();
});

// ОТРИМАННЯ ДОСТУПУ ДО ТРЕЙЛЕРУ + ЗБЕРЕЖЕННЯ МІСЦЯ, ДЕ ПЕРЕРВАВ ПЕРЕГЛЯД

const watchTrailer = async (cardId, progress) => {
  try {
    const trailers = await fetchTrailers(cardId);

    if (trailers.length > 0) {
      const trailerKey = trailers[0].key;
      const trailerContent = showTrailer(trailerKey, progress);
      modal.innerHTML = `<div class="trailer-modal-content">${trailerContent}</div>`;
      openModal(cardId);
      if (progress) {
        saveWatchProgress(cardId, progress);
      }
    } else {
      const errorContent = showError();
      modal.innerHTML = `<div class="trailer-modal-content">${errorContent}</div>`;
      openModal(cardId);
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};

const showTrailer = (trailerKey, progress) => {
  const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}&start=${progress}`;
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
    <picture>
      <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" 
              media="(max-width: 320px)">
      <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" 
              media="(max-width: 768px)">
      <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, 
                    ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" 
              media="(min-width: 769px)">
      <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Traier is not found">
    </picture>
    </div>
  `;
};


// Функція для збереження місця зупинки в Трейлері
const saveWatchProgress = (cardId, progress) => {
  const progressKey = `watchProgress_${cardId}`;
  localStorage.setItem(progressKey, progress);
};

// Функція для відновлення перегляду з місця зупинки
const restoreWatchProgress = cardId => {
  const progressKey = `watchProgress_${cardId}`;
  return localStorage.getItem(progressKey);
};


