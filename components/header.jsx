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
      <Link href="/">
        <div className="header__title">
          <Image src="/logo.svg" alt="hyper" width="40" height="40" />
          <h1>Hyper</h1>
        </div>
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
        <li>
          <Link href="/">Test</Link>
        </li>
      </ul>
    </div>
  )
}
