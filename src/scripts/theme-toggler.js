try {
    if (localStorage.getItem('theme') === 'dark-theme' || userThemeChoice) {
        document.querySelector('html').classList.add('dark');
    }
    
} catch (error) {
    console.log(error);
}

const themeTogglerEl = document.querySelector('.theme-toggler');

let userThemeChoice = false;
themeTogglerEl.addEventListener('change', handleUserThemeChoice);

function handleUserThemeChoice(e) {
    userThemeChoice = e.target.checked ? true : false;
    console.log(userThemeChoice);
    localStorage.removeItem('theme')
    if (userThemeChoice) {
        document.querySelector('html').classList.add('dark');
        localStorage.setItem('theme', 'theme-dark');
        
    }
}

