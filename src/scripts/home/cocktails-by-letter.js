import Gallery from '../gallery/gallery';

const el = {
  letterBox: document.querySelector('.search-container'),
  gallery: document.querySelector('.gallery__wrapper'),
  openListLetter: document.querySelector('.open-list-letter'),
  selectLetterMb: document.querySelector('.select-letter-mb'),
  selectidLetterMbBox: document.querySelector('.selectid-letter-mb-box'),
  selectidLetterMb: document.querySelector('.selectid-letter-mb'),
  galleryTitle: document.querySelector('.gallerytitle'),
};

const gallery = new Gallery();
const notFaundCoctail = `<div class="not-found">
<h2 class="not-foundtitle">Sorry, we didn't find any cocktail for you</h2>
<svg class="not-found__icon">
  <use href="./images/icons.svg#icon-sorry"></use>
</svg>
</div>`;

el.letterBox.addEventListener('click', handleClickToLetter);
el.openListLetter.addEventListener('click', OpenCloseListOfLetter);
el.selectLetterMb.addEventListener('click', handleClickToLetterMobileRender);

async function handleClickToLetter(e) {
  const screenWidth = window.innerWidth;
  // const getData = new ApiService();
  // const render = new Render();
  const gallery = new Gallery();

  el.letterBox.addEventListener('click', handleClickToLetterRender);
  el.openListLetter.addEventListener('click', OpenCloseListOfLetter);
  el.selectLetterMb.addEventListener('click', handleClickToLetterMobileRender);

  async function handleClickToLetterRender(e) {
    if (e.target.classList.value !== 'search-box') {
      return;
    }

    gallery.clearGallery();
    const activeLetter = document.querySelector('.search-box.is-active');

    if (activeLetter) {
      activeLetter.classList.remove('is-active');
    }

    removeCocktails();

    const selectedElement = e.target;
    const selectedLetter = e.target.textContent;
    gallery.numberOfItemsPerPage();
    const data = await gallery.getDataByLetter(selectedLetter);
    gallery.setCurrentPage(1, data);
  }

  const activeLetter = document.querySelector('.search-box.is-active');

  if (activeLetter) {
    activeLetter.classList.remove('is-active');
  }

  gallery.clearGallery();

  const selectedElement = e.target;
  const selectedLetter = e.target.textContent;
  gallery.numberOfItemsPerPage();
  const data = await gallery.getDataByLetter(selectedLetter);
  console.log(el.galleryTitle);

  // if (data === null) {
  //   el.galleryTitle.classList.toggle('is-hidden');
  //   el.galleryTitle.innerHTML = notFaundCoctail;
  // }
  gallery.setCurrentPage(1, data);

  selectedElement.classList.add('is-active');
}

async function handleClickToLetterMobileRender(e) {
  if (e.target.classList.value !== 'search-box-mb') {
    return;
  }

  const selectedLetter = e.target.textContent;
  gallery.numberOfItemsPerPage();
  const data = await gallery.getDataByLetter(selectedLetter);
  gallery.setCurrentPage(1, data);

  assingContentBySelected(selectedLetter);
  el.selectLetterMb.classList.toggle('hiden');
}

function OpenCloseListOfLetter() {
  if (el.selectidLetterMbBox.classList.contains('selectid')) {
    el.selectidLetterMbBox.classList.remove('selectid');
  }

  el.selectLetterMb.classList.toggle('hiden');
  el.openListLetter.classList.toggle('open');
}

function assingContentBySelected(content) {
  el.selectidLetterMb.textContent = content;
  el.selectidLetterMbBox.classList.add('selectid');
}
