import { useMemo, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoFilters from "../components/TodoFilters";
import TodoList from "../components/TodoList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createTodo, filterTodos } from "../utils/todoHelpers";

export default function Home() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const visibleTodos = useMemo(() => {
    return filterTodos(todos, filter);
  }, [todos, filter]);

  const addTodo = (text) => {
    const newTodo = createTodo(text);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: text.trim() } : t))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold">Todo List</h1>
          <p className="text-sm text-black/50 mt-1">
            Clean React + Tailwind project (industry style)
          </p>

          <div className="mt-6">
            <TodoForm onAdd={addTodo} />
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
            <TodoFilters filter={filter} setFilter={setFilter} />

            <button
              onClick={clearCompleted}
              className="rounded-xl border px-4 py-2 text-sm hover:bg-black/5"
            >
              Clear Completed
            </button>
          </div>

          <div className="mt-4 text-sm text-black/60 flex gap-4">
            <span>Total: {stats.total}</span>
            <span>Active: {stats.active}</span>
            <span>Done: {stats.completed}</span>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <TodoList
            todos={visibleTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>
      </div>
    </div>
  );
}
