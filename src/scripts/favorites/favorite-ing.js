const addToFavIngBtn = document.querySelector('.button-components-add');
const removeFavIngBtn = document.querySelector('.remove-fav-ing')
const body = document.querySelector('body');
const LS_KEY_FAV_ING = 'Fav-Ingredients';
// const ingItem = document.querySelector('.');

body.addEventListener('click', handleClickAddToFavIngr);
console.log(localStorage.getItem(LS_KEY_FAV_ING));
function handleClickAddToFavIngr(e) {
  // перевірка кнопки
  console.log(e.target);
  console.log(e.target.closest('.ing-wrapper').id);
  if(e.target = addToFavIngBtn) {
    console.log('+');
    let favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
    if (!favIngs) {
      const lsObj = {
        favIngs: [],
      };

      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lsObj));
      console.log(localStorage.getItem(LS_KEY_FAV_ING));
      // favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
      // console.log(favIngs);
    }
  
    const favIngrID = e.target.closest('.ingr-value').id;
    console.log(favIngrID);
    favIngs.push(favIngrID);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
  }
}
function handleClickRemoveIngr(e) {
    let favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
    const favIngrID = e.target.closest('.ingr-value').id;
    const idx = favIngs.findIndex(ing => ing === favIngrID);
    favIngs = favIngs.splice(idx, 1);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}

// jsFileName.replace(".js", ".min.js");
// Element.closest()
// var idStr = element.id;
