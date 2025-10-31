function init() {
  renderDishes();
}

function renderDishes() {
  const dishContainer = document.getElementById("dishes");
  dishContainer.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    dishContainer.innerHTML += getDishCardHtml(dishes[i]);
  }
}

function addDishToBasket() {
  document.getElementById("dishes").innerHTML;
}
