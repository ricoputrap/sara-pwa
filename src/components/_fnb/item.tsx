import { Button } from '../ui/button';

interface Props {
  name: string;
  picURL: string;
  price: number;
  // quantity: number;
  // onAdd: () => void;
  // onRemove: () => void;
}

export default function Item({
  name,
  picURL,
  price,
  // quantity,
  // onAdd,
  // onRemove
}: Props) {
  return (
    <div className="shadow p-4 rounded-lg">
      <img
        src={picURL}
        height={164}
        width={144}
        alt={`Picture of ${name}`}
        className="rounded-md h-40 w-full object-cover"
      />

      <h3 className="font-medium text-lg mt-2">{name}</h3>
      <p className="font-medium text-sm mt-4">${price}</p>
      <Button size="sm" variant="outline" className="w-full mt-2 border-green-500 text-green-500">
        Add
      </Button>
    </div>
  )
}
