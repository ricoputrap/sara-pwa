import { createFileRoute } from '@tanstack/react-router'
import Home from '@/components/_home'
import BaseLayout from '@/layouts/base';

export const Route = createFileRoute('/home')({
  component: HomePage,
})

function HomePage() {
  return (
    <BaseLayout currentPath='/home' hideHeader>
      <Home />
    </BaseLayout>
  )
}