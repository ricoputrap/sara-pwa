import { createFileRoute } from '@tanstack/react-router'
import BaseLayout from '@/layouts/base'

export const Route = createFileRoute('/maintenance')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BaseLayout
      title="Maintenance"
      currentPath='/maintenance'
      prevPath='/home'
      hideBottomNav
    >
      Maintenance
    </BaseLayout>
  )
}
