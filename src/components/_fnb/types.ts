export enum EnumCategory {
  FOOD = "FOOD",
  DRINK = "DRINK"
}

export interface IMenuItem {
  id: number;
  name: string;
  price: number;
  url: string;
  category: EnumCategory;
}