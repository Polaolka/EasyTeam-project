import ApiService from './api/apiService';
import { renderModalCoctails } from './render-modal-coctail';

const backdrop = document.querySelector('.backdrop');
const modalCoctailsEl = document.querySelector('.modal-coctails');
const closeModal = document.querySelector('.close-modal');
const apiId = new ApiService();

async function handleOpenCloseModal(e) {
  const idCard = e.target.clouser('.card').id;
  const data = await apiId.fetchDataById(idCard);
  renderModalCoctails(data);

  backdrop.classList.toggle('is-hidden');
  modalCoctailsEl.classList.toggle('is-hidden');
  const ingridient = document
    .querySelectorAll('.ingridients-item')
    .forEach(el => el.addEventListener('click', handleOpenModalIngridients));
}
closeModal.addEventListener('click', () => {
  backdrop.classList.toggle('is-hidden');
  modalCoctailsEl.classList.toggle('is-hidden');
});
