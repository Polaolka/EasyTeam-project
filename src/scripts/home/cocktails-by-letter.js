import Gallery from '../gallery/gallery';

const el = {
  letterBox: document.querySelector('.search-container'),
  gallery: document.querySelector('.gallery__wrapper'),
  openListLetter: document.querySelector('.open-list-letter'),
  selectLetterMb: document.querySelector('.select-letter-mb'),
  selectidLetterMbBox: document.querySelector('.selectid-letter-mb-box'),
  selectidLetterMb: document.querySelector('.selectid-letter-mb'),
};

el.letterBox.addEventListener('click', handleClickToLetter);

const gallery = new Gallery();
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

// import Gallery from '../gallery/gallery';

// const el = {
//   letterBox: document.querySelector('.search-container'),
//   gallery: document.querySelector('.gallery__wrapper'),
//   openListLetter: document.querySelector('.open-list-letter'),
//   selectLetterMb: document.querySelector('.select-letter-mb'),
//   selectidLetterMbBox: document.querySelector('.selectid-letter-mb-box'),
//   selectidLetterMb: document.querySelector('.selectid-letter-mb'),
// };

// el.letterBox.addEventListener('click', handleClickToLetter);

// const gallery = new Gallery();
// async function handleClickToLetter(e) {
//   const screenWidth = window.innerWidth;
// const getData = new ApiService();
// const render = new Render();
// const gallery = new Gallery();

// el.letterBox.addEventListener('click', handleClickToLetterRender);
// el.openListLetter.addEventListener('click', OpenCloseListOfLetter);
// el.selectLetterMb.addEventListener('click', handleClickToLetterMobileRender);

// async function handleClickToLetterRender(e) {
//   if (e.target.classList.value !== 'search-box') {
//     return;
//   }

//   gallery.clearGallery();
//   const activeLetter = document.querySelector('.search-box.is-active');

//   if (activeLetter) {
//     activeLetter.classList.remove('is-active');
//   }

//   removeCocktails();

//   const selectedElement = e.target;
//   const selectedLetter = e.target.textContent;
//   gallery.numberOfItemsPerPage();
//   const data = await gallery.getDataByLetter(selectedLetter);
//   gallery.setCurrentPage(1, data);

//   selectedElement.classList.add('is-active');
//   console.log(selectedElement);
// }

// gallery.numberOfItemsPerPage(screenWidth);
// gallery.getDataByLetter(selectedLetter);
// }

// async function handleClickToLetterMobileRender(e) {
//   if (e.target.classList.value !== 'search-box-mb') {
//     return;
//   }

//   const selectedLetter = e.target.textContent;

//   removeCocktails();
//   OpenCloseListOfLetter();
//   assingContentBySelected(selectedLetter);

// gallery.numberOfItemsPerPage(screenWidth);
// gallery.getDataByLetter(selectedLetter);
// }

// function removeCocktails() {
//   el.gallery.innerHTML = '';
// }

// function OpenCloseListOfLetter() {
//   if (el.selectidLetterMbBox.classList.contains('selectid')) {
//     el.selectidLetterMbBox.classList.remove('selectid');
//   }

//   el.selectLetterMb.classList.toggle('hiden');
//   el.openListLetter.classList.toggle('open');
// }

// function assingContentBySelected(content) {
//   el.selectidLetterMb.textContent = content;
//   el.selectidLetterMbBox.classList.add('selectid');
// }

// const selectidLetterMbBoxElement = document.querySelector('.selectid-letter-mb-box')
// const selectidLetterMbElement =document.querySelector('.select-letter-mb');
// const selectidLetterMbBoxElement = document.querySelectorAll('.search-box');

// if (selectidLetterMbBoxElement.classList.contains('selectid')) {
//   selectidLetterMbBoxElement.classList.remove('selectid');
// selectidLetterMbElement.textContent = 'A';
// }

// selectidLetterMbBoxElement.forEach(el => {
//   if (el.classList.contains('is-active')) {
//     el.classList.remove('is-active');
//   }
// });
