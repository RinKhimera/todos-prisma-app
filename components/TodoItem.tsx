import { Todo } from "@prisma/client"

type TodoItemsProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemsProps) => {
  return <li>{todo.title}</li>
}

export default TodoItem
