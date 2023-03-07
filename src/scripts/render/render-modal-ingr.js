import icons from '../../images/icons.svg';

const modalIngEl = document.querySelector('.components');

export function renderModalIngr(data) {
  const markupModalIng = `
  <div class="ing-wrapper" id="${data.idIngredient}">
  <svg class="close-modal2" width="32" height="32">
  <use href="${icons}#icon-close-modal"></use>
</svg>
  <div class="component-name-wraper">
    <h2 class="component-name">${data.strIngredient}</h2>
    <h3 class="component-type">${data.strType}</h3>
  </div>
  <div class="line"></div>
  <div class="componet-descriptio-wraper">
   
     ${
       data.strDescription
         ? `<div class="description-wraper"> <p class="component-description">
      ${data.strDescription}</p></div>`
         : ''
     }
    
    <ul class="component-list">
      <li class="component-list-item">✶ Type:${data.strType}</li>
      <li class="component-list-item">✶  Alcohol by volume:${data.strABV}%</li>
      <li class="component-list-item">✶ This ingredient is alcoholic:${
        data.strAlcohol
      }</li>
      
    </ul>
    <button type="button" class="button-components-add">Add to favorite</button>
  </div>
  </div>`;
  // console.log(markupModalIng);
  modalIngEl.innerHTML = markupModalIng;
}
