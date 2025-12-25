// Show selected album gallery
function showFolder(id) {
  // Hide albums
  document.querySelector('.albums').style.display = 'none';
  // Hide all galleries
  document.querySelectorAll('.gallary').forEach(g => {
    g.style.display = 'none';
    g.classList.remove('active'); // remove active class
  });

  // Show selected gallery
  const gallery = document.getElementById(id);
  gallery.style.display = 'grid';
  gallery.classList.add('active'); // mark it active

  // Reset filter when opening a new gallery
  gallery.querySelectorAll('img').forEach(img => img.style.display = 'block');
}

// Show albums view
function showAlbums() {
  document.querySelector('.albums').style.display = 'grid';
  document.querySelectorAll('.gallary').forEach(g => {
    g.style.display = 'none';
    g.classList.remove('active');
  });
}

// Open image in lightbox
function openImg(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

// Close lightbox
function closeImg() {
  document.getElementById("lightbox").style.display = "none";
}

// Filter images from Albums screen or active gallery
function filterImages(category) {
  const galleries = document.querySelectorAll('.gallary');

  // Hide albums when filtering (optional)
  document.querySelector('.albums').style.display = 'none';

  // Track if a gallery with the category exists
  let firstGalleryToShow = null;

  galleries.forEach(gallery => {
    let hasCategoryImage = false;
    gallery.querySelectorAll('img').forEach(img => {
      if (category === 'all' || img.classList.contains(category)) {
        img.style.display = 'block';
        hasCategoryImage = true;
      } else {
        img.style.display = 'none';
      }
    });

    if (hasCategoryImage && !firstGalleryToShow) {
      firstGalleryToShow = gallery;
    }

    gallery.style.display = 'none'; // hide all galleries for now
    gallery.classList.remove('active');
  });

  // Show the first gallery that contains images of the selected category
  if (firstGalleryToShow) {
    firstGalleryToShow.style.display = 'grid';
    firstGalleryToShow.classList.add('active');
  }
}
