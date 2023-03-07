import Gallery from "../gallery/gallery";

const fetchCocktailsForm = document.querySelector('.search-form');
const inputEl = document.querySelector('.input');

const gallery = new Gallery();

fetchCocktailsForm.addEventListener('submit', handleInputEvent);

async function handleInputEvent(event) {
  let cocktailName = inputEl.value.trim();
  event.preventDefault();
  gallery.clearGallery();

  if (cocktailName) {
    gallery.numberOfItemsPerPage();
    const data = await gallery.getDataByName(cocktailName);
    gallery.setCurrentPage(1, data);
  }

  fetchCocktailsForm.reset();
}