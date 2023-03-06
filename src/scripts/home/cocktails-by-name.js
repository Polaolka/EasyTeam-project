import debounce from 'lodash.debounce';
import Gallery from "../gallery/build-gallery";

const DEBOUNCE_DELAY = 500;
const fetchCocktailsForm = document.querySelector('.search-form');
const inputEl = document.querySelector('.input');
const galleryEl = document.querySelector('.gallery__wrapper');

const galleryByName = new Gallery();


fetchCocktailsForm.addEventListener('submit', handleInputEvent);

function handleInputEvent(event) {
  let cocktailName = inputEl.value.trim();
  event.preventDefault();
  removeCocktails();
  if (cocktailName) {
    galleryByName.numberOfItemsPerPage();
    galleryByName.getDataByName(cocktailName);
  }
  fetchCocktailsForm.reset();
}

function removeCocktails() {
  galleryEl.innerHTML = '';
}
