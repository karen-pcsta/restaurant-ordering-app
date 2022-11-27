import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    id: uuidv4(),
    price: 14,
    image: "pizza.png",
  },
  {
    name: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    image: "burger.png",
    id: uuidv4(),
  },
  {
    name: "Beer",
    ingredients: ["grain, hops, yeast, water"],
    price: 12,
    image: "beer.png",
    id: uuidv4(),
  },
];

export default menuArray;
