import icons from '../../images/icons.svg';
import { checkFavIng } from "../favorites/favorite-ing";

const favIngWrapper = document.querySelector('.fav-ing-wrapper');
const favIngBtn = document.querySelector('.');

favIngBtn.addEventListener('click', renderFavIng);

function renderFavIng(e) {
    
}


export default class Render {
    constructor() { }
    // Рендеримо галерею фак інгр
    renderFavIng(data) {
        const galleryItems = data.map(({ strDrinkThumb, strDrink, idDrink }) => {
            return `
            <li class="favorite" id="${data.idIngredient}">
                <h3 class="favorite__title">${data.strIngredient}</h3>
                <p class="favorite__text">${data.strType}</p>
                <div class="button">
                    <button type="button" class="button__btn button__btn--learn-more">Learn more</button>
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
    }

}

const favIngMarkup = new Render();
