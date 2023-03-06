const modalIngEl = document.querySelector('.components');

export function renderModalIngr(data) {
  const markupModalIng = `<div class="component-name-wraper">
    <h2 class="component-name">Campari</h2>
    <h3 class="component-type">Liqueur</h3>
  </div>
  <div class="line"></div>
  <div class="componet-descriptio-wraper">
    <p class="component-description">
      <span class="component">Campari</span>
      is an Italian alcoholic liqueur, considered an apéritif (20.5%, 21%, 24%,
      25%, or 28.5% ABV, depending on the country in which it is sold), obtained
      from the infusion of herbs and fruit (including chinotto and cascarilla)
      in alcohol and water. It is a bitters, characterised by its dark red
      colour.
    </p>
    <ul class="component-list">
      <li class="component-list-item">✶ Alcohol by volume: 20.5–28.5%</li>
      <li class="component-list-item">Alcohol by volume: 20.5–28.5%</li>
      <li class="component-list-item">Alcohol by volume: 20.5–28.5%</li>
      <li class="component-list-item">Alcohol by volume: 20.5–28.5%</li>
    </ul>
    <button type="button" class="button-components-add">Add to favorite</button>
  </div>`;

  modalIngEl.innerHTML = markupModalIng;
}
