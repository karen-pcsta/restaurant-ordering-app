import menuArray from "./data.js";

const orderWrapper = document.getElementById("yourOrderWrapper");
const totalContainer = document.getElementById("total-container");
const modal = document.getElementById("overlay");

document.addEventListener("click", function (e) {
  if (e.target.dataset.item) {
    chosenItem(e.target.dataset.item);
  } else if (e.target.id === "complete-order-btn") {
    paymentInfo();
  } else if (e.target.dataset.remove) {
    removeItem(e);
  } else if (e.target.id === "close-modal") {
    pay(e);
  }
  renderTotal();
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
  if (orderItems.length > 0) {
    document.getElementById("order-display").innerHTML = getOrderHtml();
    orderWrapper.classList.remove("hidden");
    totalContainer.classList.remove("hidden");
  } else {
    orderWrapper.classList.add("hidden");
    totalContainer.classList.add("hidden");
  }
}

function getOrderHtml() {
  let items = "";
  for (let i = 0; i < orderItems.length; i++) {
    items += `
    <div class="order-info" >
    <span class="item">${orderItems[i].name}</span>
    <div class="remove-button">
    <button id="${[i]}" data-remove="${orderItems[i].id}">remove</button>
    </div>
  <span class="price">$${orderItems[i].price}</span>
    </div>`;
  }
  return items;
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
  const elements = document.getElementsByTagName("section");
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
          <button><i class="fa-regular fa-plus" data-item="${item.id}"></i></button>
        </div>
      </div>`;
  }
  document.getElementById("menu-container").innerHTML = menuItem;
}

function removeItem(e) {
  let item = e.target.id;
  orderItems.splice(item, 1);
  renderOrder();
}

function pay(e) {
  e.preventDefault();
  orderWrapper.classList.add("hidden");
  totalContainer.classList.add("hidden");
  modal.classList.add("hidden");
  const elements = document.getElementsByTagName("section");
  for (let element of elements) {
    element.classList.remove("blur");
  }
  setTimeout(function () {
    document.getElementById("order-confirmation-message").classList.remove("hidden");
  }, 200);
}

renderMenu();
