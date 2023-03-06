import debounce from 'lodash.debounce';
import ApiService from './api/apiService';
import Render from './render/render';

const DEBOUNCE_DELAY = 500;
const fetchCocktailsForm = document.querySelector('.search-form');
const inputEl = document.querySelector('.input');
const galleryEl = document.querySelector('.gallery__wrapper');

const apiServiceName = new ApiService();
const renderByName = new Render();
const screenWidth = window.innerWidth;

class GalleryByName {
  constructor() {
    this.dataItems = [];
    this.itemsPerPage = 0;
  }

  // Отримуемо кількість елементів на сторінці в галереї в залежності від ширини екрана
  numberOfItemsPerPage(screenWidth) {
    if (screenWidth < 768) {
      return (this.itemsPerPage = 3);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      return (this.itemsPerPage = 6);
    } else if (screenWidth > 1280) {
      return (this.itemsPerPage = 9);
    }
  }

  // Будуємо розмітку в залежності від кількості елементів на стр.
  async fetchCoctails(data) {
    const allNames = await apiServiceName.fetchDataByName(data);
    for (let i = 0; i < this.itemsPerPage; i += 1) {
      this.dataItems.push(allNames[i]);
    }
    renderByName.renderGallery(this.dataItems);
  }
}

const galleryByName = new GalleryByName();

fetchCocktailsForm.addEventListener('submit', handleInputEvent);

function handleInputEvent(event) {
  let cocktailName = inputEl.value.trim();
  event.preventDefault();
  removeCocktails();
  if (cocktailName) {
    galleryByName.numberOfItemsPerPage(screenWidth);
    galleryByName.fetchCoctails(cocktailName);
  }
  fetchCocktailsForm.reset();
}

function removeCocktails() {
  galleryEl.innerHTML = '';
}
