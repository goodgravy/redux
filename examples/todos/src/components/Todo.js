import React, { PropTypes } from 'react'
import { Link } from 'react-router';

const Todo = ({ onClickComplete, token, completed, text }) => (
  <li>
    <Link
      to={`/todo/${token}`}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >{text}</Link>
    <Link onClick={onClickComplete}>toggle</Link>
  </li>
)

Todo.propTypes = {
  onClickComplete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
