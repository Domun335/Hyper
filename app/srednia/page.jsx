'use client'

import './mean.scss'
import { useState } from 'react'

export default function Mean() {
  const [num, setNum] = useState('')
  const [sum, setSum] = useState(0)
  const [count, setCount] = useState(0)

  const addToArr = () => {
    const numberValue = Number(num)
    if (num === '' || numberValue < 0) return

    const newSum = sum + numberValue
    const newCount = count + 1

    setSum(newSum)
    setCount(newCount)
    setNum('')
  }

  const reset = () => {
    setSum(0)
    setCount(0)
    setNum('')
  }

  const mean = count > 0 ? sum / count : 0

  return (
    <main className="mean">
      <h1 className="mean__title">Oblicz Średnią</h1>

      <input
        type="number"
        min="0"
        onChange={(e) => setNum(e.target.value)}
        value={num}
        placeholder="Wpisz liczbę dodatnią"
        className="mean__input"
      />
      <div className="mean__buttons">
        <button className="mean__button" onClick={addToArr}>
          Dodaj
        </button>
        <button className="mean__button" onClick={reset}>
          Resetuj
        </button>
      </div>

      <p className="mean__result">Średnia: {mean.toFixed(2)}</p>
    </main>
  )
}
