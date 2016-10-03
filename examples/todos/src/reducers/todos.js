const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        editing: false,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        editing: true
      }
    case 'SAVE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        editing: false,
        text: action.text
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
    case 'EDIT_TODO':
    case 'SAVE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
