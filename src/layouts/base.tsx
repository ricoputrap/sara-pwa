import BottomNavMenu from '@/components/bottom-nav-menu';
import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
  title?: string;
  hideHeader?: boolean;
  currentPath: string;
  children: React.ReactNode
}

export default function BaseLayout({ title, hideHeader, currentPath, children }: Props) {
  return (
    <>
      {hideHeader ? null : (
        <header className="fixed top-0 px-5 flex items-center w-full h-14 shadow-md">
          <h3 className="font-semibold">{title}</h3>
        </header>
      )}

      <main className={cn({ "pt-14": !hideHeader })}>
        {children}
      </main>

      <BottomNavMenu currentPath={currentPath} />
    </>
  )
}
