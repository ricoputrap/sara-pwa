import BaseLayout from '@/layouts/base'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BaseLayout title="Orders" currentPath='/orders'>
      ORDERS
    </BaseLayout>
  )
}
