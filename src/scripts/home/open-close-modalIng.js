import ApiService from '../api/apiService';
import { renderModalIngr } from '../render/render-modal-ingr';

const backdrop = document.querySelector('.backdrop');
const modalCoctailsEl = document.querySelector('.modal-coctails');

const modalIng = document.querySelector('.components');
const apiIng = new ApiService();

export async function handleOpenModalIngridients(e) {
  e.preventDefault();
  modalCoctailsEl.classList.add('is-hidden');

  console.log(e.target.closest('li'));
  const query = e.target.closest('li').dataset.name;

  const data = await apiIng.fetchDataByIngr(query);
  renderModalIngr(data[0]);
  modalIng.classList.remove('is-hidden');

  const closeModalIn = document.querySelector('.close-modal2');
  closeModalIn.addEventListener('click', () => {
    modalIng.classList.add('is-hidden');
    modalCoctailsEl.classList.remove('is-hidden');
  });
}
