import { cn } from '@/lib/utils';

interface Props {
  label: string;
}

export default function MenuItem({ label }: Props) {
  return (
    <div className={cn(
      "flex flex-col justify-center items-center gap-y-4",
      "rounded-lg shadow h-44 bg-white"
    )}>
      <div className="bg-neutral-500 rounded-full w-14 h-14"></div>
      <p>{ label }</p>
    </div>
  )
}
