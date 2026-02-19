export default function TodoFilters({ filter, setFilter }) {
  const filters = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`rounded-xl px-4 py-2 text-sm font-medium border transition
            ${
              filter === f.key
                ? "bg-black text-white border-black"
                : "bg-white text-black hover:bg-black/5"
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
