import { CircleMinus, CirclePlus } from "lucide-react"
import { Button } from '../ui/button';

interface Props {
  name: string;
  picURL: string;
  price: number;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function Item({
  name,
  picURL,
  price,
  quantity,
  onAdd,
  onRemove
}: Props) {
  return (
    <div className="shadow p-4 rounded-lg flex flex-col gap-y-2">
      <img
        src={picURL}
        height={164}
        width={144}
        alt={`Picture of ${name}`}
        className="rounded-md h-40 w-full object-cover"
      />

      <h3 className="font-medium text-lg">{name}</h3>
      <p className="font-medium text-sm">${price}</p>
      <div className="flex-1 flex items-end">
        {quantity > 0 ? (
          <div className="flex items-center justify-center gap-x-5 w-full">
            <CircleMinus size={20} onClick={onRemove} className="cursor-pointer" />
            {quantity}
            <CirclePlus size={20} onClick={onAdd} className="cursor-pointer" />
          </div>
        ) : (
          <Button
            size="sm"
            variant="outline"
            className="w-full border-green-500 text-green-500"
            onClick={onAdd}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  )
}
