// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const imageCardContainer = document.querySelector(".gallery");
const cardsMarcup = createImageCardMarkup(galleryItems);
imageCardContainer.insertAdjacentHTML("beforeend", cardsMarcup);

function createImageCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery__link');