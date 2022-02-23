let imageGallery = document.getElementById("image-gallery");
let imageGalleryCard = document.querySelector(".image-gallery__card");
const imageGalleryControls = {
  left: document.getElementById("image-gallery-left-control"),
  right: document.getElementById("image-gallery-right-control")
};

let testimonialGallery = document.getElementById("testimonial-gallery");
let testimonialGalleryCard = document.querySelector(".image-gallery__testimonial-card");
const testimonialGalleryControls = {
  left: document.getElementById("testimonial-gallery-left-control"),
  right: document.getElementById("testimonial-gallery-right-control")
};

function centerScrollableElement(scrollableElem, elemControls) {
  let leftOffset = Math.round((scrollableElem.scrollWidth - scrollableElem.offsetWidth) / 2);
  updateScrollableElemControls(scrollableElem,
                               elemControls,
                               leftOffset);
  scrollableElem.scrollLeft = leftOffset;
}

function updateScrollableElemControls(scrollableElem, elemControls, scrollLeft) {
  let maxScrollLeft = scrollableElem.scrollWidth - scrollableElem.offsetWidth;
  elemControls.left.style.opacity = scrollLeft > 0 ? "1" : "0.3";
  elemControls.right.style.opacity = scrollLeft < maxScrollLeft ? "1" : "0.3";
}

function handleControlClick(scrollableElem, scrollableElemCard, elemControls, orientation) {
  let step = scrollableElemCard.offsetWidth + parseInt(window.getComputedStyle(scrollableElem).columnGap);
  let newScrollLeft = orientation === "left"  ? scrollableElem.scrollLeft - step :
                      orientation === "right" ? scrollableElem.scrollLeft + step :
                                                scrollableElem.scrollLeft;
  updateScrollableElemControls(scrollableElem, elemControls, newScrollLeft);
  scrollableElem.scrollLeft = newScrollLeft;
}

imageGalleryControls.left.addEventListener("click", () => {
  handleControlClick(imageGallery,
                     imageGalleryCard,
                     imageGalleryControls,
                     "left");
});

imageGalleryControls.right.addEventListener("click", () => {
  handleControlClick(imageGallery,
                     imageGalleryCard,
                     imageGalleryControls,
                     "right");
});

testimonialGalleryControls.left.addEventListener("click", () => {
  handleControlClick(testimonialGallery,
                     testimonialGalleryCard,
                     testimonialGalleryControls,
                     "left");
});

testimonialGalleryControls.right.addEventListener("click", () => {
  handleControlClick(testimonialGallery,
                     testimonialGalleryCard,
                     testimonialGalleryControls,
                     "right");
});

const collapsibleButtons = document.querySelectorAll('.collapsible-item__button');

for (let collapsibleButton of collapsibleButtons) {
  collapsibleButton.addEventListener("click", function() {
    let collapsibleItem = collapsibleButton.nextElementSibling;
    collapsibleItem.classList.toggle("active");
    this.classList.toggle("active");
  });
}

window.onload = function() {
  centerScrollableElement(imageGallery, imageGalleryControls);
  centerScrollableElement(testimonialGallery, testimonialGalleryControls);
}
