import Gallery from "../gallery/build-gallery";

const fetchCocktailsForm = document.querySelector('.search-form');
const fetchCocktailsFormMobile = document.querySelector('.search-form-mobile');
const inputEl = document.querySelector('.input');
const galleryEl = document.querySelector('.gallery__wrapper');
const screenWidth = window.innerWidth;

const galleryByName = new Gallery();

fetchCocktailsForm.addEventListener('submit', handleInputEvent);
fetchCocktailsFormMobile.addEventListener('submit', handleInputEvent);

async function handleInputEvent(event) {
  let cocktailName = inputEl.value.trim();
  event.preventDefault();
  removeCocktails();
  if (cocktailName) {
    galleryByName.numberOfItemsPerPage(screenWidth);
    const data = await galleryByName.getDataByName(cocktailName);
    console.log(data);
    galleryByName.setCurrentPage(1, data);
    // galleryByName.getDataByName(cocktailName);
  }
  fetchCocktailsForm.reset();
}

function removeCocktails() {
  galleryEl.innerHTML = '';
}
