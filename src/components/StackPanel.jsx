export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-box border border-base-300 bg-base-100 p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-xl font-bold">Your Stack</h3>
      <p className="mb-4 text-sm text-base-content/70">{stack.length} Technology Selected</p>

      {stack.length === 0 ? (
        <div className="rounded-box border border-dashed border-base-300 py-10 text-center text-sm text-base-content/60">
          Your stack is empty. Add a technology from the list to get started.
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {stack.map((item) => (
              <li key={item.id} className="flex items-center gap-3 rounded-box bg-base-200/60 p-3">
                <img src={item.icon} alt="" className="h-9 w-9 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{item.name}</p>
                  <p className="text-xs text-base-content/60">{item.category}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="btn btn-ghost btn-xs btn-circle"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onRemoveAll} className="btn btn-outline btn-error btn-sm mt-4 w-full ">
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
