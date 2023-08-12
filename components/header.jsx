'use client'

import './styles/header.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const reset = () => setIsOpen(false)

  return (
    <div className="header">
      <Link className="header__title" href="/" onClick={reset}>
        <Image src="/logo.svg" alt="hyper" width="40" height="40" />
        <h1>Hyper</h1>
      </Link>

      <div className="header__menu" onClick={() => setIsOpen(!isOpen)}>
        <div className={`header__item ${isOpen ? 'header__item--on' : ''}`} />
        <div className={`header__item ${isOpen ? 'header__item--on' : ''}`} />
        <div className={`header__item ${isOpen ? 'header__item--on' : ''}`} />
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
        <li>
          <Link href="/lista-zadan" onClick={reset}>
            Todo
          </Link>
        </li>
      </ul>
    </div>
  )
}
