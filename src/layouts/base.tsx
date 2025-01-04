import React from 'react'
import { ArrowLeft } from "lucide-react"
import BottomNavMenu from '@/components/bottom-nav-menu';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

interface Props {
  title?: string;
  hideHeader?: boolean;
  hideBottomNav?: boolean;
  currentPath: string;
  prevPath?: string;
  children: React.ReactNode
}

export default function BaseLayout({
  title,
  hideHeader,
  currentPath,
  prevPath,
  hideBottomNav,
  children
}: Props) {
  return (
    <>
      {/* Header */}
      {hideHeader ? null : (
        <header className="bg-white fixed top-0 px-5 flex items-center gap-x-3 w-full h-14 shadow-md">
          {prevPath ? (
            <Link to={prevPath}>
              <ArrowLeft size={24} />
            </Link>
          ) : null}
          <h3 className="font-semibold">{title}</h3>
        </header>
      )}

      {/* Main Content */}
      <main className={cn({
        "pt-14": !hideHeader,
        "h-screen": true
      })}>
        {children}
      </main>

      {/* Bottom Navigation Menu */}
      {hideBottomNav ? null : (
        <BottomNavMenu currentPath={currentPath} />
      )}
    </>
  )
}
