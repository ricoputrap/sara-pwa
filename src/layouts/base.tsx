import BottomNavMenu from '@/components/bottom-nav-menu';
import React from 'react'

interface Props {
  title: string;
  currentPath: string;
  children: React.ReactNode
}

export default function BaseLayout({ title, currentPath, children }: Props) {
  return (
    <>
      <header className="fixed top-0 px-5 flex items-center w-full h-14 shadow-md">
        <h3 className="font-semibold">{title}</h3>
      </header>

      <main className="pt-14">
        {children}
      </main>

      <BottomNavMenu currentPath={currentPath} />
    </>
  )
}
