import ApiService from '../api/apiService';
import { renderModalIngr } from '../render/render-modal-ingr';

const backdrop = document.querySelector('.backdrop');
const modalCoctailsEl = document.querySelector('.modal-coctails');
const closeModalIn = document.querySelector('.close-modal2');
const modalIng = document.querySelector('.components');
const apiIng = new ApiService();

export async function handleOpenModalIngridients(e) {
  e.prventDefault();
  modalCoctailsEl.classList.add('is-hidden');
  const query = e.target.textContent;
  const data = await apiIng.fetchDataByIngr(query);
  console.log(data);

  renderModalIngr(data);
  modalIng.classList.remove('is-hidden');
}

closeModalIn.addEventListener('click', () => {
  modalIng.classList.add('is-hidden');
  modalCoctailsEl.classList.remove('is-hidden');
});
