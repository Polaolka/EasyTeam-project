const modalBtn = document.querySelector('[modalBtn]');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('#closeBtn');

// Відкриваємо модальне вікно
modalBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
});

// Закриваємо модальне вікно
closeBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});