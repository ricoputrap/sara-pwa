import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="p-2">
      <p>Hello from About!</p>

      <Link to="/" className="[&.active]:font-bold">
        <button>
          Home
        </button>
      </Link>{' '}
    </div>
  )
}