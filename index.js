import menuArray from "./data.js";

function renderMenu() {
  let menuItem = "";
  for (let item of menuArray) {
    menuItem += `<div class="menu-item">
        <img src="./images/${item.image}" alt="" />
        <div class="item-info">
          <h4>${item.name}</h4>
          <p class="ingredients">${item.ingredients}</p>
          <span class="price">$${item.price}</span>
        </div>
        <div class="item-button">
          <button><i class="fa-regular fa-plus"></i></button>
        </div>
      </div>`;
  }
  document.getElementById("menu-container").innerHTML = menuItem;
}

renderMenu();
