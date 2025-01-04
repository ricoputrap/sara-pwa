import useFoodBeverageStore from '@/stores/fnb-store';
import Item from './item';
import { IMenuItem } from './types';

interface Props {
  title: string;
  items: IMenuItem[];
}

export default function Items({ title, items }: Props) {
  const { orderItems, addItem, removeItem } = useFoodBeverageStore();

  const getQuantity = (id: number) => {
    const item = orderItems.find((item) => item.id == id);
    return item ? item.quantity : 0;
  }

  return (
    <div className="shadow bg-white pb-4">
      <div className="py-3 px-5 border-b">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <div className="mt-4 px-5 grid grid-cols-2 gap-5">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            picURL={item.url}
            price={item.price}
            quantity={getQuantity(item.id)}
            onAdd={() => addItem({
              id: item.id,
              name: item.name,
              price: item.price,
              url: item.url,
              quantity: 1
            })}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
    </div>
  )
}
