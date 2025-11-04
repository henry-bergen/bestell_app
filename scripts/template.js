function getDishCardHtml(dish, i) {
  return `        
    <div class="dishCard">
      <div class="dishInfo">
        <h3>${dish.name}</h3>
        <p class="dishDescription">${dish.description}</p>
        <p class="dishPrice">${dish.price} €</p>
      </div>
      <button onclick="addDishToBasket(${i})" class="addBtn">+</button>
    </div>
    `;
}

function getBasketDishHtml(item, i) {
  return `
    <div class="basketItem">
      <span>${item.name}</span>
      <div class="basketItemNumbers">
        <div class="qtyControl">
          <button onclick="decreaseAmount(${i})">-</button>
          <span>${item.amount}x</span>
          <button onclick="increaseAmount(${i})">+</button>
        </div>
        <span class="dishPrice"
          >${(item.basePrice * item.amount)
            .toFixed(2)
            .replace(".", ",")} €</span
        >
      </div>
    </div>
    <hr />
    `;
}

function getBasketSummaryHtml(subtotal, shipping, total) {
  return `
    <div class="basketSummaryItem">
      <span>Zwischensumme</span>
      <span class="dishPrice">${subtotal.toFixed(2).replace(".", ",")} €</span>
    </div>
    <div class="basketSummaryItem">
      <span>Lieferkosten</span>
      <span class="dishPrice">${shipping.toFixed(2).replace(".", ",")} €</span>
    </div>
    <div class="basketSummaryItem">
      <strong>Gesamt</strong>
      <strong class="dishPrice">${total.toFixed(2).replace(".", ",")} €</strong>
    </div>
  `;
}
