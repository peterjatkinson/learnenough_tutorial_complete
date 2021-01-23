// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");
  // Image info to be updated
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    // Preload large images.
    let newImageSrc  = thumbnail.dataset.largeVersion; //new variable that equals each of the largeVersion filepaths
    let largeVersion = new Image(); //creates a new JavaScript object
    largeVersion.src = newImageSrc; //the src attribute of the JavaScript object (stored in the variable largeVersion is equal to each of the filepaths for the largeVersions. I think in essence this then means all of these images are loaded (into the JS object) when the page is loaded, which fulfils the intention of these three lines to speed up the large versions loading when clicking through. And note it occurs before the event listener bellow as we want it to start up immmediately on loading the page.)
    
    thumbnail.addEventListener("click", function() {
      // Set clicked image as display image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change which image is current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info.
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
