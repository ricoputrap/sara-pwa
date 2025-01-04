import { createFileRoute } from '@tanstack/react-router'
import BaseLayout from '@/layouts/base'

export const Route = createFileRoute('/laundry')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BaseLayout
      title="Laundry"
      currentPath='/laundry'
      prevPath='/home'
      hideBottomNav
    >
      Laundry
    </BaseLayout>
  )
}
