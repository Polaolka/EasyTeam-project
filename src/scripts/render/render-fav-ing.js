import ApiService from '../api/apiService';
import icons from '../../images/icons.svg';
import { checkFavIng } from "../favorites/favorite-ing";
const LS_KEY_FAV_ING = 'Fav-Ingredients';

const favIngWrapper = document.querySelector('.fav-ing-wrapper');
// const favIngOpener = document.querySelector('.js-fav-ing-opener');
const apiService = new ApiService();
// favIngOpener.addEventListener('click', getFavIngData);
// const promisesIng = makePromises();

getFavIngData();

    // Генеруємо проміси ing.
function makePromises() {
    const favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
    console.log(favIngs);
    // const promises = favIngs.reduce((acc, id)=> {return acc.push(apiService.fetchDataByIdIngr(id))}, [])
    const promises = favIngs.reduce((acc, id)=> {acc.push(apiService.fetchDataByIdIngr(id)); return acc;}, [])
    console.log(promises);
    return promises;
}

    // Чекаємо виконання всіх промісів з fav ing
async function waitAllPromises(promisesIng) {
     const pr = Promise.all(promisesIng).catch(error =>
      console.log(error)
    )
    return pr;
}

    //Очищуємо вміст галереї
//   function  clearGallery() {
//     favIngWrapper.innerHTML = '';
//     console.log("done");
// }

// fetchDataByIdIngr(query)
function renderFavIng(data) {
console.log(data);

        const galleryItems = data.map((elem) => {
            return `
            <li class="favorite" id="${elem.idIngredient}">
                <h3 class="favorite__title">${elem.strIngredient}</h3>
                <p class="favorite__text">${elem.strType}</p>
                <div class="button">
                    <button type="button" class="button__btn button__btn--learn-more js-learn-more-ing">Learn more</button>
                    <button type="button" class="button__btn button__btn--add-to js-remove-ing-card">Remove
                        <svg class="button__icon">
                            <use class="icon-heart" href="${icons}#icon-heart_fill"></use>
                        </svg>
                 </button>
                </div>
            </li>
            `;
        })
        .join('');
        // console.log(galleryItems);

        // favIngWrapper.insertAdjacentHTML('beforeend', galleryItems);
        favIngWrapper.innerHTML = galleryItems;

        favIngWrapper.addEventListener('click', (e) => {
            const elem = e.target;
          
            if (elem.classList.contains('js-learn-more-ing')) {
            //   handleOpenCloseModal(e);
              console.log('click on "Learn more ing"')
            }
            if (elem.classList.contains('js-remove-ing-card')) {
              console.log('click on "Remove from button"')
              // handleClickAddToFavIngr(e);
            }
          })
}

  // Отримуємо данні з fav ing
  async function getFavIngData() {
    // e.preventDefault();
    // console.log('+');
    const promises = makePromises();
    // console.log(`pr ${promises}`);
    const data = await waitAllPromises(promises);
    // console.log(data);

    const flatData = data.flatMap(i => i);
    // console.log(flatData);
    // clearGallery();
    renderFavIng(flatData);
}

