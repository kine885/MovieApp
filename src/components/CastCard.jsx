export default function CastCard({ actor, type = "movie" }) {
  if (!actor) return null; // skip rendering if actor is undefined

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-white">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden rounded-t-lg md:h-64">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            className="w-full h-full object-cover"
            alt={actor.name || "Actor"}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            No Image
          </div>
        )}
      </div>
      {/* Text Section */}
      <div className="p-5">
        <h5 className="mb-2 font-inter font-bold text-[16px] tracking-tight text-black truncate">
          {actor.name || "Unknown Actor"}
        </h5>
        <p className="text-sm text-gray-900  truncate">
          as {actor.character || "Unknown Role"}
        </p>
      </div>
    </div>
  );
}
