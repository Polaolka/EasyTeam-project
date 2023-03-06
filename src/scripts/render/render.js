const galleryEl = document.querySelector('.gallery__wrapper');

export default class Render {
    constructor() { }
    // Рендеримо галерею
    renderGallery(data) {
        const galleryItems = data.map(({ strDrinkThumb, strDrink, idDrink }) => {
            return `<div class="card" id="${idDrink}">
                <img src="${strDrinkThumb}" alt="${strDrink}" class="card__img">
                <h3 class="card__title">${strDrink}</h3>
                <div class="buttons">
                    <button type="button" class="buttons__btn buttons__btn--learn-more">Learn more</button>
                    <button type="button" class="buttons__btn buttons__btn--add-to">Add to
                        <svg class="buttons__icon">
                            <use href="./images/icons.svg#heart"></use>
                        </svg>
                    </button>
                </div>
            </div>`
        })
            .join('');

        galleryEl.insertAdjacentHTML('beforeend', galleryItems)
    }
}