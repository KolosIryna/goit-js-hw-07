import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
    <a  class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" width="240" data-source="${original}" alt="${description}"></a></li>`)
    .join("");
    
galleryEl.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
