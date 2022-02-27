import React, { useRef, useContext } from 'react'

import { TodosContext } from '../store/todos-context'

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const userInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const userInput = userInputRef.current!.value

    if (userInput.trim().length === 0) {
      return
    }

    todosCtx.addTodo(userInput)
  }

  return (
    <li>
      <form onSubmit={submitHandler}>
        <label htmlFor='text'>Enter a todo</label>
        <input type='text' id='text' ref={userInputRef} />
        <button type='submit'>Confirm</button>
      </form>
    </li>
  )
}

export default NewTodo
