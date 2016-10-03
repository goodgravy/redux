import React from 'react'
import { connect } from 'react-redux'
import { saveTodo } from '../actions'

let EditTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(saveTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Save Todo
        </button>
      </form>
    </div>
  )
}
EditTodo = connect()(EditTodo)

export default EditTodo
