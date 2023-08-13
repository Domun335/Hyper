'use client'

import './lista-zadan.scss'
import { useEffect, useState } from 'react'

export default function ListaZadan() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    return localValue ? JSON.parse(localValue) : []
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newItem.trim() === '') return

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ])
    setNewItem('')
  }
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    )
  }
  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  return (
    <main className="todo">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Dodaj zadanie</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="input"
        />
        <button type="submit">Dodaj</button>
      </form>

      <ul>
        {todos.length === 0 && <li>Brak zadań</li>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
