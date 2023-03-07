import ApiService from '../api/apiService';
import icons from '../../images/icons.svg';
import { checkFavIng } from "../favorites/favorite-ing";
const LS_KEY_FAV_ING = 'Fav-Ingredients';

const favIngWrapper = document.querySelector('.fav-ing-wrapper');
const favIngOpener = document.querySelector('.js-fav-ing-opener');
const apiService = new ApiService();
favIngOpener.addEventListener('click', getFavIngData);
// const promisesIng = makePromises();
makePromises();

    // Генеруємо проміси ing.
function makePromises() {
    const favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
    const promises = favIngs.reduce((acc, id)=> {return acc.push(apiService.fetchDataByIdIngr(id))}, [])
    return promises;
}

    // Чекаємо виконання всіх промісів з fav ing
function waitAllPromises(promisesIng) {
    return promises = Promise.all(promisesIng).catch(error =>
      console.log(error)
    )
}

    //Очищуємо вміст галереї
  function  clearGallery() {
    favIngWrapper.innerHTML = ''
}

// fetchDataByIdIngr(query)
function renderFavIng(data) {
        const galleryItems = data.map(({ idIngredient, strIngredient, strType }) => {
            return `
            <li class="favorite" id="${idIngredient}">
                <h3 class="favorite__title">${strIngredient}</h3>
                <p class="favorite__text">${strType}</p>
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

        favIngWrapper.insertAdjacentHTML('beforeend', galleryItems);

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
    console.log('+');
    const promises = makePromises();
    const data = await waitAllPromises(promises);
    const flatData = data.flatMap(i => i);
    clearGallery();
    renderFavIng(flatData);
}
