"use client"

import { createTodoAction } from "@/app/_actions"
import { useRef } from "react"

const NewTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const action = async (data: FormData) => {
    const title = data.get("title")
    if (!title || typeof title !== "string") {
      return
    } else {
      await createTodoAction(title)
      formRef.current?.reset()
    }
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className="mb-2 font-medium">Create a new Todo</h2>
      <input
        className="rounded border border-slate-400 px-2 py-0.5"
        type="text"
        name="title"
      />
      <button
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
