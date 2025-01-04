import useFoodBeverageStore from '@/stores/fnb-store'
import { Button } from '../ui/button';

export default function Checkout() {
  const { orderItems } = useFoodBeverageStore();

  const totalItems = orderItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalItemsLabel = totalItems > 1
    ? `${totalItems} items`
    : "1 item"

  const totalPrice = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="w-full border-t px-4 py-3 bg-white fixed bottom-0">
      <Button className="w-full flex justify-between bg-green-600">
        <p className="font-medium">{totalItemsLabel}</p>
        <p>${totalPrice.toFixed(2)}</p>
      </Button>
    </div>
  )
}
