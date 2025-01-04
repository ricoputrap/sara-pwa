import { Link } from '@tanstack/react-router';

interface Props {
  label: string;
  targetPath: string;
}

export default function MenuItem({ label, targetPath }: Props) {
  return (
    <div className="rounded-lg shadow h-44 bg-white">
      <Link to={targetPath} className="h-full flex flex-col justify-center items-center gap-y-4">
        <div className="bg-neutral-500 rounded-full w-14 h-14"></div>
        <p>{ label }</p>
      </Link>
    </div>
  )
}
