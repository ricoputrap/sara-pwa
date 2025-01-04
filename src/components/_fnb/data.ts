import { EnumCategory, IMenuItem } from "./types";

export const ITEMS: IMenuItem[] = [
  {
    id: 1,
    name: "Burger",
    category: EnumCategory.FOOD,
    price: 15,
    url: "images/burger.jpg"
  },
  {
    id: 2,
    name: "Pizza",
    category: EnumCategory.FOOD,
    price: 20,
    url: "images/pizza.jpg"
  },
  {
    id: 3,
    name: "Gorengan",
    category: EnumCategory.FOOD,
    price: 10,
    url: "images/gorengan.jpg"
  },
  {
    id: 4,
    name: "Fried Rice",
    category: EnumCategory.FOOD,
    price: 15,
    url: "images/nasi-goreng.jpg"
  },
  {
    id: 5,
    name: "Iced Coffee",
    category: EnumCategory.DRINK,
    price: 5,
    url: "images/iced-coffee.jpg"
  },
  {
    id: 6,
    name: "Chai Tea",
    category: EnumCategory.DRINK,
    price: 2,
    url: "images/chai-tea.jpg"
  },
  {
    id: 7,
    name: "Cappuccino",
    category: EnumCategory.DRINK,
    price: 5,
    url: "images/cappuccino.jpg"
  },
  {
    id: 8,
    name: "Iced Orange Juice",
    category: EnumCategory.DRINK,
    price: 5,
    url: "images/iced-orange-juice.jpg"
  },
  {
    id: 9,
    name: "Pudding",
    category: EnumCategory.DRINK,
    price: 5,
    url: "images/pudding.jpg"
  },
];