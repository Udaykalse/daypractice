import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/30"
      />

      <button className="rounded-xl bg-black px-5 py-3 font-medium text-white hover:bg-black/90">
        Add
      </button>
    </form>
  );
}
