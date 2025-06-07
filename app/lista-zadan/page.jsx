'use client'

import './todo.scss'
import { useEffect, useState } from 'react'

export default function ToDo() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue) setTodos(JSON.parse(localValue))
  }, [])
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
      <form className="todo__form" onSubmit={handleSubmit}>
        <label htmlFor="input">Dodaj zadanie</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="input"
        />
        <button className="todo__submit" type="submit">
          Dodaj
        </button>
      </form>

      <ul className="todo__list">
        {todos.length === 0 && <li className="todo__list--none">Brak zadań</li>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                className="todo__checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button className="todo__delete" onClick={() => deleteTodo(todo.id)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
