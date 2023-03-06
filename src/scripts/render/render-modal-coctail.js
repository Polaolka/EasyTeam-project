const modalCoctails = document.querySelector('.modal-coctails');
export function renderModalCoctails(data) {
  const markupModalCoctail = `
  
  <h2 class="ingridients-title">${data.strDrink}</h2>
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
     ${
       data.strIngredient2
         ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure2} ${data.strIngredient2}</a
        >`
         : ''
     }
${
  data.strIngredient3
    ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure3} ${data.strIngredient3}</a
        >`
    : ''
}
${
  data.strIngredient4
    ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure4} ${data.strIngredient4}</a
        >`
    : ''
}
${
  data.strIngredient5
    ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure5} ${data.strIngredient5}</a
        >`
    : ''
}
${
  data.strIngredient6
    ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure6} ${data.strIngredient6}</a
        >`
    : ''
}
${
  data.strIngredient7
    ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure7} ${data.strIngredient7}</a
        >`
    : ''
}
 ${
   data.strIngredient8
     ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure8} ${data.strIngredient8}</a
        >`
     : ''
 }
 ${
   data.strIngredient9
     ? `<li class="ingridients-item">
<a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure9} ${data.strIngredient9}</a
        >`
     : ''
 }
${
  data.strIngredient10
    ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure10} ${data.strIngredient10}</a
        >`
    : ''
}
${
  data.strIngredient11
    ? `<li class="ingridients-item"><a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure11} ${data.strIngredient11}</a
        >`
    : ''
}
 ${
   data.strIngredient12
     ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure12} ${data.strIngredient12}</a
        >`
     : ''
 }
 ${
   data.strIngredient13
     ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure13} ${data.strIngredient13}</a
        >`
     : ''
 }
 ${
   data.strIngredient14
     ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure14} ${data.strIngredient14}</a
        >`
     : ''
 }
  ${
    data.strIngredient15
      ? `<li class="ingridients-item">
        <a
          href="#"
          class="ingridients-link"
          target="_blank"
          rel="noreferrer noopener"
          >✶ ${data.strMeasure15} ${data.strIngredient15}</a
        >`
      : ''
  }
</ul>
      <button type="button" class="button-add">Add to favorite</button>
      `;
  modalCoctails.innerHTML = markupModalCoctail;
}
