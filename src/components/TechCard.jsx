export default function TechCard({ tech, added, onAdd }) {
  return (
    <article className="card border border-base-300 bg-base-100 shadow-sm transition hover:shadow-md">
      <div className="card-body gap-3 p-5">
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={`${tech.name} logo`} className="h-12 w-12 object-contain" />
          <span className="badge badge-secondary badge-outline">{tech.badge}</span>
        </div>

        <h3 className="card-title">{tech.name}</h3>
        <p className="text-sm text-base-content/70">{tech.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="badge badge-ghost">{tech.category}</span>
          <span className="text-xs text-base-content/60">{tech.difficulty}</span>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <span className="flex items-center gap-1 font-semibold">
            <span className="text-warning">★</span> {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={added}
          className={`btn mt-2 w-full rounded-full border-0 ${added ? "" : "bg-brand text-white"}`}
        >
          {added ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}
