import debounce from 'lodash.debounce';
import ApiService from '../api/apiService';
import Render from '../render/render';
import Gallery from "../gallery/build-gallery";

const DEBOUNCE_DELAY = 500;
const fetchCocktailsForm = document.querySelector('.search-form');
const inputEl = document.querySelector('.input');
const galleryEl = document.querySelector('.gallery__wrapper');

const screenWidth = window.innerWidth;
const galleryByName = new Gallery();


fetchCocktailsForm.addEventListener('submit', handleInputEvent);

function handleInputEvent(event) {
  let cocktailName = inputEl.value.trim();
  event.preventDefault();
  removeCocktails();
  if (cocktailName) {
    galleryByName.numberOfItemsPerPage(screenWidth);
    galleryByName.getDataByName(cocktailName);
  }
  fetchCocktailsForm.reset();
}

function removeCocktails() {
  galleryEl.innerHTML = '';
}
