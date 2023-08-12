'use client'

import './lista-zadan.scss'
import { useState } from 'react'

export default function ListaZadan() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem('')
  }
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
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
        <button>Dodaj</button>
      </form>

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
        </li>
      ))}
    </main>
  )
}
