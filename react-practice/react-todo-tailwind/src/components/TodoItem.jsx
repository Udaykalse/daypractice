import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const saveEdit = () => {
    if (!draft.trim()) return;
    onEdit(todo.id, draft);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5"
        />

        {isEditing ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="flex-1 rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/30"
          />
        ) : (
          <p
            className={`flex-1 text-sm ${
              todo.completed ? "line-through text-black/40" : "text-black"
            }`}
          >
            {todo.text}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={saveEdit}
              className="rounded-xl bg-black px-3 py-2 text-sm text-white hover:bg-black/90"
            >
              Save
            </button>

            <button
              onClick={() => {
                setIsEditing(false);
                setDraft(todo.text);
              }}
              className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              className="rounded-xl border px-3 py-2 text-sm hover:bg-red-50 hover:text-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}
