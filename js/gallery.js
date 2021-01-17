// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);
      //alternative way of doing the above line:
      //let newImageAlt = thumbnail.alt;
      //mainImage.setAttribute("alt", mainImageAlt);
      //or could do it by getting the data-title info I suppose, similar to how the largeVersion info is retrieved above
    });
  });
}