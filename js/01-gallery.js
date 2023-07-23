import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
    <a  class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" width="240" data-source="${original}" alt="${description}"></a></li>`)
    .join("");
    
galleryEl.insertAdjacentHTML('beforeend', markup);
galleryEl.addEventListener('click', onClick);

function onClick(e) {
    e. preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    openLightbox(e);
 }

function openLightbox (event) {
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">`
    );
    instance.show();

    galleryEl.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
          instance.close();
        }
    });
}


      