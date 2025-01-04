import FoodAndBeverage from '@/components/_fnb'
import BaseLayout from '@/layouts/base'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fnb')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BaseLayout
      title="Food & Beverage"
      currentPath='/fnb'
      prevPath='/home'
      hideBottomNav
    >
      <FoodAndBeverage />
    </BaseLayout>
  )
}
