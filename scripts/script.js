const basket = [];

function init() {
  getFromLocalStorage();
  renderDishes();
  renderBasket();
}

function renderDishes() {
  const menuDishesContainer = document.getElementById("dishes");
  menuDishesContainer.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    menuDishesContainer.innerHTML += getDishCardHtml(dishes[i], i);
  }
}

function addDishToBasket(i) {
  const dish = dishes[i];
  const basketItem = basket.find((element) => element.name === dish.name);

  if (basketItem) {
    basketItem.amount += 1;
  } else {
    basket.push({
      name: dish.name,
      amount: 1,
      basePrice: parseFloat(dish.price.replace(",", ".")),
    });
  }

  renderBasket();
}

function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("basket"));
  if (myArr) {
    basket.length = 0;
    basket.push(...myArr);
  }
}

function renderBasket() {
  const basketDishesContainer = document.getElementById("basketItems");
  basketDishesContainer.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    basketDishesContainer.innerHTML += getBasketDishHtml(basket[i], i);
  }

  const basketSummaryContainer = document.getElementById("basketSummary");
  const { subtotal, shipping, total } = calculateTotals();

  renderSummary(basketSummaryContainer, subtotal, shipping, total);
  saveToLocalStorage();
}

function calculateTotals() {
  let subtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    subtotal += basket[i].basePrice * basket[i].amount;
  }
  const shipping = 5;
  const total = subtotal + shipping;
  return { subtotal, shipping, total };
}

function renderSummary(container, subtotal, shipping, total) {
  container.innerHTML = getBasketSummaryHtml(subtotal, shipping, total);
}

function increaseAmount(i) {
  basket[i].amount += 1;
  renderBasket();
}

function decreaseAmount(i) {
  basket[i].amount -= 1;
  if (basket[i].amount < 1) basket.splice(i, 1);
  renderBasket();
}
