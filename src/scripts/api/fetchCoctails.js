import axios from "axios";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export default async function fetchCoctails() {
    const { data } = await axios.get(`${BASE_URL}`);
    const response = data.drinks;
    return response;
}

// Отримуемо кількість елементів на сорінці в галереї в залежності від ширини екрана 
function getNumberOfItemsPerPage() {
    const screenWidth = window.innerWidth;
    console.log('screenWidth: ', screenWidth);
    if (screenWidth < 768) {
        return 3
    } else if (screenWidth >= 768 && screenWidth < 1280) {
        return 6
    } else if (screenWidth > 1280) {
        return 9
    }
}
const itemsPerPage = getNumberOfItemsPerPage();

// Генеруємо проміси рандомних коктейлів в залежності від кількості на стр.
function getRandomCoctails(itemsPerPage) {
    const promises = [];
    for (let i = 0; i < itemsPerPage; i += 1) {
        promises.push(fetchCoctails());
    }
    return promises;
}

// Чекаємо виконання всіх промісів з рандомними коктейлями
function returnAllCards(primises) {
    return Promise.all(primises)
        .catch(error => console.log(error));
}

// Отримуємо рандомні данні з рандомними коктейлями
async function getRandomData(itemsPerPage) {
    const promises = getRandomCoctails(itemsPerPage);
    const data = await returnAllCards(promises);
    const flatData = data.flatMap(i => i);
    renderGalery(flatData);
}
getRandomData(itemsPerPage);


const galleryEl = document.querySelector('.gallery__wrapper');
// Рендеримо галерею
function renderGalery(data) {
    console.log('data: ', data);
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