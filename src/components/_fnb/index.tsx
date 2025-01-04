import { ITEMS } from './data'
import Items from './items';
import { EnumCategory } from './types'

const foods = ITEMS.filter((item) => item.category == EnumCategory.FOOD);
const drinks = ITEMS.filter((item) => item.category == EnumCategory.DRINK);

export default function FoodAndBeverage() {
  
  return (
    <div id="food-and-beverage" className="flex flex-col gap-y-2">
      <Items title="Foods" items={foods} />
      <Items title="Drinks" items={drinks} />
    </div>
  )
}
