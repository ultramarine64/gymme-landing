function centerScrollableElement(elem) {
  let leftOffset = Math.round((elem.scrollWidth - elem.offsetWidth) / 2);
  elem.scrollLeft = leftOffset;
}

let imageGallery = document.getElementById("image-gallery");
let imageGalleryCard = document.querySelector(".image-gallery__card");
const imageGalleryLeftControl = document.getElementById("image-gallery-left-control");
const imageGalleryRightControl = document.getElementById("image-gallery-right-control");

imageGalleryLeftControl.addEventListener("click", () => {
  let step = imageGalleryCard.offsetWidth + parseInt(window.getComputedStyle(imageGallery).columnGap);
  let scrollLeft = imageGallery.scrollLeft - step;
  imageGallery.scrollLeft = scrollLeft;
  let maxScrollLeft = imageGallery.scrollWidth - imageGallery.offsetWidth;
  imageGalleryLeftControl.style.opacity = scrollLeft > 0 ? "1" : "0.3";
  imageGalleryRightControl.style.opacity = scrollLeft < maxScrollLeft ? "1" : "0.3";
})

imageGalleryRightControl.addEventListener("click", () => {
  let step = imageGalleryCard.offsetWidth + parseInt(window.getComputedStyle(imageGallery).columnGap);
  let scrollLeft = imageGallery.scrollLeft + step;
  imageGallery.scrollLeft = scrollLeft;
  let maxScrollLeft = imageGallery.scrollWidth - imageGallery.offsetWidth;
  imageGalleryLeftControl.style.opacity = scrollLeft > 0 ? "1" : "0.3";
  imageGalleryRightControl.style.opacity = scrollLeft < maxScrollLeft ? "1" : "0.3";
})

window.onload = function() {
  centerScrollableElement(imageGallery);
}