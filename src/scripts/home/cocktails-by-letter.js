import Gallery from '../gallery/gallery';

const el = {
  letterBox: document.querySelector('.search-container'),
  gallery: document.querySelector('.gallery__wrapper'),
};

el.letterBox.addEventListener('click', handleClickToLetter);

const gallery = new Gallery();
async function handleClickToLetter(e) {
  if (e.target.classList.value !== 'search-box') {
    return;
  }

  gallery.clearGallery();

  const selectedLetter = e.target.textContent;
  gallery.numberOfItemsPerPage();
  const data = await gallery.getDataByLetter(selectedLetter);
  gallery.setCurrentPage(1, data);
}