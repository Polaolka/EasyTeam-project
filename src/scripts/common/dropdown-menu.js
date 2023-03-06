const dropdownMenuEl = document.querySelector('.dropdown-menu');
const menuDropdownBtn = document.querySelector('.dropdown-menu-btn');


menuDropdownBtn.addEventListener('click', handleDropdownClick);
// dropdownMenuEl.addEventListener('click', handleDropdownMenuClick);


function handleDropdownClick() {
    dropdownMenuEl.classList.toggle('js-menu-hidden');
}
// function handleDropdownMenuClick(e) {
//     console.log(e.target);
//     if (e.target !== dropdownMenuEl) 
//     //     dropdownMenuEl.removeEventListener("click", handleDropdownMenuClick);
//        { dropdownMenuEl.classList.toggle('js-menu-hidden');}
//     }

