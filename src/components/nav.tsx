'use client'

import { useState } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'
import { Menu, X } from 'lucide-react' // You can swap this with any icons

export default function Nav() {
  const path = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/work', text: 'Work' },
    { path: '/blog', text: 'Blog' },
    { path: '/faves', text: "Dave's faves" },
  ]

  return (
    <div className="fixed top-2 sm:top-5 left-0 z-50 w-full px-4">
      {/* Desktop Nav */}
      <nav className="hidden sm:flex text-main-foreground border-border shadow-shadow rounded-base bg-main font-base
        mx-auto w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base items-center">
        {links.map((link) => (
          <Link
            key={link.path}
            className={clsx(
              'hover:border-border rounded-base border-2 px-2 py-1 transition-colors',
              path === link.path ? 'border-border' : 'border-transparent',
            )}
            href={link.path}
          >
            {link.text}
          </Link>
        ))}
        <ThemeSwitcher />
      </nav>

      {/* Mobile Nav */}
      <div className="sm:hidden flex mt-2 mx-10 bg-main border-2 border-border 
        rounded-base shadow-shadow mx-auto p-2 my-5 w-max space-y-2 text-sm ml-0">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-2 bg-main border-2 border-border 
        rounded-base shadow-shadow px-4 py-2 space-y-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.path}
              className={clsx(
                'block rounded-base border-2 px-2 py-1 transition-colors hover:border-border',
                path === link.path ? 'border-border' : 'border-transparent',
              )}
              href={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}