export const createTodo = (text) => ({
  id: crypto.randomUUID(),
  text: text.trim(),
  completed: false,
  createdAt: Date.now(),
});

export const filterTodos = (todos, filter) => {
  if (filter === "active") return todos.filter((t) => !t.completed);
  if (filter === "completed") return todos.filter((t) => t.completed);
  return todos;
};
