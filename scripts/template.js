function getDishCardHtml(dish) {
  return `        
    <div class="dishCard">
        <div class="dishInfo">
            <h3>${dish.name}</h3>
            <p class="dishDescription">${dish.description}</p>
            <p class="dishPrice">${dish.price} €</p>
        </div>
        <button onclick="addDishToBasket(dish)" class="addBtn">+</button>
    </div>
    `;
}

function getBasketHTML(dish) {
  return `     
    <span>${dish.name}</span>
    <div class="qtyControl">
        <button>-</button>
        <span>3x</span>
        <button>+</button>
    </div>
    <span class="dishPrice">${dish.price} €</span>
    <hr />
    `;
}
