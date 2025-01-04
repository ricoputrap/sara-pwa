import useFoodBeverageStore from '@/stores/fnb-store';
import Checkout from './checkout';
import { ITEMS } from './data'
import Items from './items';
import { EnumCategory } from './types'
import { cn } from '@/lib/utils';

const foods = ITEMS.filter((item) => item.category == EnumCategory.FOOD);
const drinks = ITEMS.filter((item) => item.category == EnumCategory.DRINK);

export default function FoodAndBeverage() {
  const { orderItems } = useFoodBeverageStore();

  return (
    <div id="food-and-beverage">
      <div className={cn({
        "flex flex-col gap-y-2": true,
        "pb-16": orderItems.length > 0
      })}>
        <Items title="Foods" items={foods} />
        <Items title="Drinks" items={drinks} />
      </div>

      {orderItems.length > 0 ? <Checkout /> : null}
    </div>
  )
}
