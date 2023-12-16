import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className="flex rounded bg-blue-500 bg-opacity-30 p-2 m-2">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2"/>
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}
