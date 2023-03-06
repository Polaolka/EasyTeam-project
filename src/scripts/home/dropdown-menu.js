const menuDropdownBtn = document.querySelector('.mark-more-mobile');
const menuDropdownEl = document.querySelector('.dropdown-menu-mobile');
menuDropdownBtn.addEventListener('click', handleDropdownClick);

function handleDropdownClick(e) {
    menuDropdownEl.classList.toggle('js-menu-hidden');
    menuDropdownBtn.classList.toggle('js-rotate');;
};
