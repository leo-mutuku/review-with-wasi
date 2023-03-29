import React from "react"

function TodoListItem(TodoListItem) {
  return <li key={TodoListItem.todo.id}>{TodoListItem.todo.title}</li>
}

export default TodoListItem