let galleryItems = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const thumbnailContainer = document.getElementById('thumbnail-container');

let currentIndex = 0;

// Open lightbox
function openLightbox(event) {
  if (event.target.tagName === 'IMG') {
    const clickedGallery = event.target.closest('.gallery');
    const clickedImages = clickedGallery.querySelectorAll('img');

    galleryItems = Array.from(clickedImages);
    currentIndex = galleryItems.indexOf(event.target);

    lightbox.style.display = 'flex';
    showImage();
    showThumbnails(clickedImages);
  }
}

// Close lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Show image in lightbox
function showImage() {
  lightboxImg.src = galleryItems[currentIndex].src;
}

// Change image based on direction (-1 for previous, 1 for next)
 function changeImage(direction) {
    const currentBlock = galleryItems[currentIndex].closest('.gallery');
    const imagesInBlock = currentBlock.querySelectorAll('img');
    const totalImagesInBlock = imagesInBlock.length;

    let nextIndex = (currentIndex + direction + totalImagesInBlock) % totalImagesInBlock;

    // If next index exceeds the number of images in the block, set index to the first image
    if (nextIndex < 0) {
    currentIndex = totalImagesInBlock - 1;
    } else if (nextIndex >= totalImagesInBlock) {
    currentIndex = 0;
    } else {
    currentIndex = nextIndex;
    }

    showImage();
    updateThumbnailStyles();
}



// Show thumbnails
function showThumbnails(images) {
  thumbnailContainer.style.display = 'flex';
  thumbnailContainer.classList.flexDirection = 'row';
  thumbnailContainer.innerHTML = '';
  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.classList.add('thumbnail', "sm:swiper-slide");
    if (index === currentIndex) {
      thumbnail.classList.add('active-thumbnail');
    }
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      showImage();
      updateThumbnailStyles();
    });
    thumbnailContainer.appendChild(thumbnail);
  });
}

// Update thumbnail styles
function updateThumbnailStyles() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    if (index === currentIndex) {
      thumbnail.classList.add('active-thumbnail');
    } else {
      thumbnail.classList.remove('active-thumbnail');
    }
  });
}

// Keyboard navigation
document.addEventListener('keydown', (event) => {
  if (lightbox.style.display === 'block') {
    if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showImage();
      updateThumbnailStyles();
    } else if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showImage();
      updateThumbnailStyles();
    }
  }
});

// Attach click event listeners to gallery items
galleryItems.forEach((item, index) => {
  item.addEventListener('click', openLightbox);
});
