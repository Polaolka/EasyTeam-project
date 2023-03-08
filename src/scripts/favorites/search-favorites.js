const searchFofm = document.querySelector('.search-form');
const LS_SEARCH = 'SearchFromFavorites';

searchFofm.addEventListener('submit', handleSearchFaforitSubmit);

function handleSearchFaforitSubmit(event) {
    event.preventDefault();
    document.location.assign('./index.html');
    localStorage.setItem(LS_KEY_FAV_ING, JSON.stringify(favIngs));
    // const favIngs = JSON.parse(localStorage.getItem(LS_KEY_FAV_ING));
}