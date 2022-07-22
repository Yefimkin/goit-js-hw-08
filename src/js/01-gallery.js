import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryRef = document.querySelector('.gallery');

function galleryRender(arrayOfImages) {
    const arrayOfImg = [];
    galleryItems.map(({ preview, original, description }) => {
        arrayOfImg.push(`<a class="gallery__item" href="${original}">
                            <img class="gallery__image" 
                            src="${preview}" 
                            alt="${description}" />
                        </a>`);
    });
    galleryRef.insertAdjacentHTML('beforeend', arrayOfImg.join(''));
}
galleryRender(galleryItems);



let SimpleLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.9,
    loop: true,
});