import menuArray from "./data.js";

const orderWrapper = document.getElementById("yourOrderWrapper");

document.addEventListener("click", function (e) {
  if (e.target.dataset.pizza) {
    chosenItem(e.target.dataset.pizza);
  } else if (e.target.dataset.hamburger) {
    chosenItem(e.target.dataset.hamburger);
  } else if (e.target.dataset.beer) {
    chosenItem(e.target.dataset.beer);
  }
  renderOrder();
  toggleOrderDisplay();
});
function toggleOrderDisplay() {
  if (orderItems) {
    orderWrapper.classList.remove("hidden");
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

renderMenu();
