import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src="sara-logo.png" className="w-44 h-36" />

        <Link to="/about" className="[&.active]:font-bold">
          <button>
            About
          </button>
        </Link>
      </div>
    </div>
  )
}