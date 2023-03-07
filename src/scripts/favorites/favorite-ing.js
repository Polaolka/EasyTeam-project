const addToFavIngBtn = document.querySelector('.button-components-add');
const removeFavIngBtn = document.querySelector('.remove-fav-ing')
const gallery = document.querySelector('.gallery');
const LS_KEY_FAV_ING = 'Fav-Ingredients';
// const ingItem = document.querySelector('.');

gallery.addEventListener('click', handleClickAddToFavIngr);

function handleClickAddToFavIngr(e) {
  // перевірка кнопки
  // if(e.target = ) {

  // }


  let favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
  if (!favIngs) {
    const lsObj = {
      favIngs: [],
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lsObj));
    favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
  }

  const favIngrID = e.target.closest('.ingr-value').id;
  favIngs.push(favIngrID);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}
function handleClickRemoveIngr(e) {
    let favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
    const favIngrID = e.target.closest('.ingr-value').id;
    const idx = favIngs.findIndex(ing => ing === favIngrID);
    favIngs = favIngs.splice(idx, 1);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}

// jsFileName.replace(".js", ".min.js");
