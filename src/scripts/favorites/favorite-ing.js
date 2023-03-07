// const addToFavIngBtn = document.querySelector('.js-ing-add');
// const removeFavIngBtn = document.querySelector('.remove-fav-ing');
// const body = document.querySelector('body');
// body.addEventListener('click', handleClickAddToFavIngr);
// const LS_KEY_FAV_ING = 'Fav-Ingredients';


// // console.log(localStorage.getItem(LS_KEY_FAV_ING));
// export function handleClickAddToFavIngr(e) {
//   if (!e.target.classList.contains('js-ing-add')) {
//     return
//   }
//   const favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
//   console.log(favIngs);
//   if(!favIngs) {localStorage.setItem(LS_KEY_FAV_ING, JSON.stringify([]))}

//   const favIngrID = e.target.closest('.ing-wrapper').id;

//   console.log(favIngrID);

//   favIngs.push(favIngrID)
//   localStorage.setItem(LS_KEY_FAV_ING, JSON.stringify(favIngs));
//   console.log(JSON.parse(localStorage.getItem(LS_KEY_FAV_ING)));
//   e.target.classList.add('js-ing-remove');
//   e.target.classList.remove('js-ing-add');

// }
// function handleClickRemoveIngr(e) {
//     let favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
//     const favIngrID = e.target.closest('.ingr-value').id;
//     const idx = favIngs.findIndex(ing => ing === favIngrID);
//     favIngs = favIngs.splice(idx, 1);
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
// }

// // jsFileName.replace(".js", ".min.js");
// // Element.closest()
// // var idStr = element.id;
