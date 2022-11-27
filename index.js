import menuArray from "./data.js";

const orderWrapper = document.getElementById("yourOrderWrapper");
const totalContainer = document.getElementById("total-container");

document.addEventListener("click", function (e) {
  if (e.target.dataset.pizza) {
    chosenItem(e.target.dataset.pizza);
  } else if (e.target.dataset.hamburger) {
    chosenItem(e.target.dataset.hamburger);
  } else if (e.target.dataset.beer) {
    chosenItem(e.target.dataset.beer);
  } else if (e.target.id === "complete-order-btn") {
    paymentInfo();
  }
  renderTotal();
  displaySections();
});

let orderItems = [];

function chosenItem(uuid) {
  let menuItem = menuArray.filter(function (item) {
    return item.id === uuid;
  })[0];
  orderItems.push(menuItem);
  renderOrder();
}

function renderOrder() {
  document.getElementById("order-display").innerHTML = getOrderHtml();
}

function getOrderHtml() {
  let items = "";
  for (let item of orderItems) {
    items += `
    <div class="order-info">
    <span class="item">${item.name}</span>
    <div class="remove-button">
    <button>remove</button>
    </div>
  <span class="price">$${item.price}</span>
    </div>`;
  }
  return items;
}

function displaySections() {
  if (orderWrapper.classList.contains("hidden") && totalContainer.classList.contains("hidden")) {
    orderWrapper.classList.toggle("hidden");
    totalContainer.classList.toggle("hidden");
  }
}

function calculateTotal() {
  let totalPrice = 0;
  for (let item of orderItems) {
    totalPrice += item.price;
  }
  return totalPrice;
}

function renderTotal() {
  document.getElementById("total-container").innerHTML = `<div class="total">
      <span class="total-title">Total price:</span>
      <span class="total-price price" id="total-price">$${calculateTotal()}</span>
    </div>
    <div class="complete-order-button-container">
      <button class="complete-order-button" id="complete-order-btn">Complete order</button>
      </div>
      </div>`;
}

function paymentInfo() {
  document.getElementById("overlay").classList.toggle("hidden");
  const elements = document.querySelectorAll(".no-blur");
  for (let element of elements) {
    element.classList.add("blur");
  }
}

function renderMenu() {
  let menuItem = "";
  for (let item of menuArray) {
    menuItem += `<div class="menu-item" id= "menu-item">
        <img src="./images/${item.image}" alt="" />
        <div class="item-info">
          <h4>${item.name}</h4>
          <p class="ingredients">${item.ingredients}</p>
          <span class="price">$${item.price}</span>
        </div>
        <div class="item-button">
          <button><i class="fa-regular fa-plus" data-${item.name}="${item.id}"></i></button>
        </div>
      </div>`;
  }
  document.getElementById("menu-container").innerHTML = menuItem;
}

renderMenu();
