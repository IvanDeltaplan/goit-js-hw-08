import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const galleryGrid = document.querySelector(".gallery");

const galleryStr = galleryItems
  .map((item) => {
    // console.log(item.original)
    return ` <div class= gallery__item>
          <a class= gallery__link href= ${item.original} >
            
          <img
          class= gallery__image
          src= ${item.preview}
          data-source= ${item.original}
          alt= ${item.description} 
            />
    </a>
    </div> 
        `;
  })
  .join("");

// galleryGrid.addEventListener("click", onClick);
// function onClick(event) {
//   event.preventDefault();
// }
galleryGrid.insertAdjacentHTML("beforeend", galleryStr);

// let gallery = new SimpleLightbox(".gallery a");
// gallery.on("show.simplelightbox", function () {
//   // Do something…
// });

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
