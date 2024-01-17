import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';

// Change code below this line
const container = document.querySelector('.gallery');
//rendering
function createMarkup(arr) {
  return arr
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
         </li>`
    )
    .join('');
}

container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

const captlightbox = () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};

captlightbox();
console.log(galleryItems);
