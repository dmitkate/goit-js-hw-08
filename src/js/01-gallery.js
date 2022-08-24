import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map((item) =>
    `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>`)
    .join("");

gallery.innerHTML = galleryItem;

const lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 1,
    captionsData: "alt",
    captionDelay: 250,
    });