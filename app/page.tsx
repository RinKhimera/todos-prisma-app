import { getTodos } from "@/lib/todos"

export default async function Home() {
  const { todos } = await getTodos()
  return (
    <section className="py-20">
      <div className="container">
        <h1>Todos</h1>
        <h2>Previous todos:</h2>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
