let imageGallery = document.getElementById("image-gallery");
let imageGalleryCard = document.querySelector(".image-gallery__card");
const imageGalleryLeftControl = document.getElementById("image-gallery-left-control");
const imageGalleryRightControl = document.getElementById("image-gallery-right-control");

imageGalleryLeftControl.addEventListener("click", () => {
  let step = imageGalleryCard.offsetWidth + parseInt(window.getComputedStyle(imageGallery).columnGap);
  imageGallery.scrollLeft -= step;

})

imageGalleryRightControl.addEventListener("click", () => {
  let step = imageGalleryCard.offsetWidth + parseInt(window.getComputedStyle(imageGallery).columnGap);
  imageGallery.scrollLeft += step;
})