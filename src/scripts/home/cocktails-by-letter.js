import ApiService from '../api/apiService';
import Render from '../render/render';
import Gallery from '../gallery/build-gallery';

const el = {
  letterBox: document.querySelector('.search-container'),
  gallery: document.querySelector('.gallery__wrapper'),
};

el.letterBox.addEventListener('click', handleClickToLetter);

const screenWidth = window.innerWidth;
const getData = new ApiService();
const render = new Render();
const gallery = new Gallery();

async function handleClickToLetter(e) {
  if (e.target.classList.value !== 'search-box') {
    return;
  }

  removeCocktails();

  const selectedLetter = e.target.textContent;
  const numberOfCocktails = gallery.numberOfItemsPerPage(screenWidth);
  const cocktailsDataBySelectedLetter = await getData.fetchDataByLetter(
    selectedLetter
  );

  gallery.numberOfItemsPerPage(screenWidth);
  gallery.getDataByLetter(selectedLetter);

  //   for (let i = 0; i < numberOfCocktails; i++) {
  //     gallery.promises.push(cocktailsDataBySelectedLetter);
  //   }

  //   console.log(cocktailsDataBySelectedLetter);
  //   console.log(numberOfCocktails);
  //   console.log(gallery.promises);

  //   gallery.promises = [];
}

function removeCocktails() {
  el.gallery.innerHTML = '';
}
