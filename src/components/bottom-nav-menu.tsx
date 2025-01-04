import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router'
import { Logs } from 'lucide-react'
import { House } from 'lucide-react'

interface Props {
  currentPath: string;
}

export default function BottomNavMenu({ currentPath }: Props) {
  return (
    <nav className="fixed bottom-0 w-full shadow-md bg-white">
      <ul className="flex flex-row items-center justify-around h-14">
        <li className={cn({
          "cursor-pointer text-gray-500 hover:text-blue-500 flex-1": true,
          "font-bold": currentPath === "/home"
        })}>
          <Link to="/home" className="flex flex-col items-center gap-y-1 py-2">
            <House size={20} />
            <span className="text-sm">Home</span>
          </Link>
        </li>
        <li className={cn({
          "cursor-pointer text-gray-500 hover:text-blue-500 flex-1": true,
          "font-bold": currentPath === "/orders"
        })}>
          <Link to="/orders" className="flex flex-col items-center gap-y-1 py-2">
            <Logs size={20} />
            <span className="text-sm">Orders</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
