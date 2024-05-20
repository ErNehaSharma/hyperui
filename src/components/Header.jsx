'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import BrandLogo from '@component/BrandLogo'
import Container from '@component/Container'
import GithubSocial from '@component/GithubSocial'
import HeaderMenu from '@component/HeaderMenu'
import HeaderMenuLinks from '@component/HeaderMenuLinks'
import HeaderSearch from '@component/HeaderSearch'

export default function Header() {
  const routerPathname = usePathname()

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => setShowMenu(false), [routerPathname])

  const menuLinks = [
    {
      title: 'Application UI',
      href: '/components/application-ui',
    },
    {
      title: 'Marketing',
      href: '/components/marketing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Shop',
      href: '/shop',
      highlight: true,
    },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <Container classNames="relative flex h-16 items-center justify-between gap-4 sm:gap-8">
        <div className="flex items-center gap-4">
          <BrandLogo />

          <HeaderMenuLinks menuLinks={menuLinks} navClass="hidden md:block" ulClass="gap-4 flex" />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <Announcement />

          <HeaderSearch />

          <GithubSocial />

          <HeaderMenu showMenu={showMenu} handleSetShowMenu={setShowMenu} menuLinks={menuLinks} />
        </div>
      </Container>
    </header>
  )
}

function Announcement() {
  return (
    <a
      href="https://markmdev.gumroad.com/l/tailwindcss-tips-tricks-experiments"
      target="_blank"
      rel="noreferrer"
      className="hidden items-center justify-center gap-1 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-200 hover:text-purple-800 sm:inline-flex"
    >
      <span className="whitespace-nowrap text-sm">Tailwind CSS Tips & Tricks</span>

      <span role="img" aria-hidden="true" className="hidden sm:block">
        👉
      </span>
    </a>
  )
}
