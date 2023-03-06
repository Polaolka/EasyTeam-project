const modalCoctails = document.querySelector;

export function renderModalCoctails(data) {
  const markupModalCoctail = data
    .map(data => {
      return `<h2 class="ingridients-title">${data.strDrink}</h2>
    <div class="instruction-wraper">
      <h3 class="instraction-title">Instraction:</h3>
      <p class="instraction">
     ${data.strInstructions}
      </p>
    </div>
    <img src="${
      data.strDrinkThumb
    }" alt="coctail photo" width="280" class="coctails-img" />

    <h3 class="ingridients">INGREDIENTS</h3>
    <h3 class="ingridients-per">Per cocktail</h3>
    <ul class="ingridients-list">
     ${
       data.strIngredient1
         ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure1} ${data.strIngredient1}</a
        >`
         : ''
     }
    

        
    </ul>
      <button type="button" class="button-add">Add to favorite</button>
      `;
    })
    .join('');

  modalCoctails.innerHTML(markupModalCoctail);
}
