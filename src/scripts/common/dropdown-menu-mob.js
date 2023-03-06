const menuDropdownMobileBtn = document.querySelector('.mark-more-mobile');
const menuDropdownElMob = document.querySelector('.dropdown-menu-mobile');

menuDropdownMobileBtn.addEventListener('click', handleDropdownMobileClick);

function handleDropdownMobileClick(e) {
    menuDropdownElMob.classList.toggle('js-menu-hidden');
    menuDropdownMobileBtn.classList.toggle('js-rotate');
};
