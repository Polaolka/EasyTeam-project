import ApiService from '../api/apiService';
const apiService = new ApiService();

const favWrapper = document.querySelector('.fav-cocktails__box');

export default class FavGallery {
    async render() {
        const favIds = JSON.parse(localStorage.getItem('favIds') ?? '{}')

        for (let id in favIds) {
            const drink = await apiService.fetchDataById(id);
        
            const code = this.renderFavGallery(drink[0]);
        
            favWrapper.insertAdjacentHTML('beforeend', code);
        }

        this.addListeners();
    }

    async renderByLetter(letter) {
        const favIds = JSON.parse(localStorage.getItem('favIds') ?? '{}')

        for (let id in favIds) {
            const drink = await apiService.fetchDataById(id);

            if(!drink[0].strDrink.toLowerCase().startsWith(letter.toLowerCase()))
              continue;
        
            const code = this.renderFavGallery(drink[0]);
        
            favWrapper.insertAdjacentHTML('beforeend', code);
        }

        this.addListeners();
    }

    removeCocktails() {
        favWrapper.innerHTML = '';
    }

    addListeners() {
        favWrapper
        .querySelectorAll('.fav-buttons__btn--remove')
        .forEach(e =>
          e.addEventListener('click', this.onRemoveFromFavorite.bind(e))
        );
    }

    onRemoveFromFavorite() {
        const id = this.attributes['data-id'].value
        const favIds = JSON.parse(localStorage.getItem('favIds') ?? '{}')

        delete favIds[id];
    
        localStorage.setItem('favIds', JSON.stringify(favIds));
        this.parentElement.parentElement.remove()
    }

    renderFavGallery({ strDrinkThumb, strDrink, idDrink }) {
        return `<div class="fav-card" id="${idDrink}">
        <img src="${strDrinkThumb}" alt="${strDrink}" class="fav-card__img" />
        <h3 class="fav-card__title">${strDrink}</h3>
        <div class="fav-buttons">
          <button type="button" class="fav-buttons__btn fav-buttons__btn--learn-more">Learn more</button>
          <button type="button" class="fav-buttons__btn fav-buttons__btn--remove" data-id="${idDrink}">Remove
            <svg class="fav-buttons__icon">
              <use href="./images/icons.svg#icon-heart_fill"></use>
            </svg>
          </button>
        </div>
      </div>`;
    }
}