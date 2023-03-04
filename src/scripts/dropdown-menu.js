const menuDropdownBtn = document.querySelector('.mark-more-mobile');
const menuDropdownEl = document.querySelector('.dropdown-menu');
menuDropdownBtn.addEventListener('click', handleDropdownClick);

function handleDropdownClick(e) {
    menuDropdownEl.classList.toggle('js-menu-hidden');
    menuDropdownBtn.classList.toggle('js-rotate');;
};
