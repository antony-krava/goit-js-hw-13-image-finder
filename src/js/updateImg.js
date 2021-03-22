import galleryMarkup from '../templates/cardItem.hbs';
import refs from './refs';

function updateImgsMarkup(images) {
  const markup = galleryMarkup(images);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImgsMarkup;