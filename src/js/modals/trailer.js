// import { fetchTrailer } from '../fetches/fetch-trailer';
// // import { cardId } from 'catalog.js';

// const modal = document.querySelector('.modal');
// const watchTrailer = async cardId => {
//   try {
//     const trailers = await fetchTrailer(cardId);

//     if (trailers.length > 0) {
//       const trailerContent = showTrailer(trailers[0].key);
//       modal.innerHTML = trailerContent;
//     } else {
//       const errorContent = showError();
//       modal.innerHTML = errorContent;
//     }
//   } catch (error) {
//     console.error('Error fetching trailer:', error);
//   }
// };

// const showTrailer = trailerKey => {
//   const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
//   return `
//     <iframe src="${trailerUrl}" width="100%" height="100%"></iframe>
//   `;
// };

// const showError = () => {
//   return `
//     <div class="trailer-error-info">
//       <p>OOPS...</p>
//       <p>We are very sorry!</p>
//       <p>But we couldn't find the trailer.</p>
//     </div>
// <picture>
//   <source srcset="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png, 1x, 
//                ../../images/trailer-placeholder/mobile/trailer-placeholder-2x.png, 2x" 
//           media="(max-width: 320px)">
//   <source srcset="../../images/trailer-placeholder/tablet/trailer-placeholder-1x.png, 1x, 
//                ../../images/trailer-placeholder/tablet/trailer-placeholder-2x.png, 2x" 
//           media="(max-width: 768px)">
//   <source srcset="../../images/trailer-placeholder/desktop/trailer-placeholder-1x.png, 1x, 
//                ../../images/trailer-placeholder/desktop/trailer-placeholder-2x.png, 2x" 
//           media="(min-width: 769px)">
//   <img src="../../images/trailer-placeholder/mobile/trailer-placeholder-1x.png" alt="Trailer Placeholder">
// </picture>
//   `;
// };

// watchTrailer(cardId);
