export function closeOnBacdrop(e, closeMoreDetail) {
  closeOnBackdropClick(e, closeMoreDetail);
}

export function closeOnBackdropClick(e, callback) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    callback();
  }
}

export function showTrailer(trailerKey) {
  const viewportWidth = document.body.clientWidth;
  if (viewportWidth <= 767) {
    return `
      <iframe width="250" height="160" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  } else {
    return `
      <iframe width="600" height="300" src="https://www.youtube.com/embed/${trailerKey}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  }
}
