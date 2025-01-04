import BaseLayout from '@/layouts/base'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/housekeeping')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BaseLayout
      title="Housekeeping"
      currentPath='/housekeeping'
      prevPath='/home'
      hideBottomNav
    >
      Housekeeping
    </BaseLayout>
  )
}
