export const groupDestinationPhotosGenerator = (photos) => photos.map((photo) => `
  <img class="event__photo" src="${photo.src}" alt="${photo.description}">
`).join('');
