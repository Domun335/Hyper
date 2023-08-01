'use client'
import './styles/header.scss'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const reset = () => setIsOpen(false)

  return (
    <div className="header">
      <Link href="/">
        <h1 className="header__title">CMS Test</h1>
      </Link>

      <div className="header__menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="header__item" />
        <div className="header__item" />
        <div className="header__item" />
      </div>

      <ul
        className={`header__menu--droped ${
          isOpen ? 'header__menu--on' : 'header__menu--off'
        }`}
      >
        <li>
          <Link href="/filmy" onClick={reset}>
            Filmy
          </Link>
        </li>
        <li>Dwa</li>
      </ul>
    </div>
  )
}
