// MovieDetailHeaderLoading.jsx
export default function MovieDetailHeaderLoading() {
  return (
    <div className="relative w-full flex items-end p-4 md:p-6 pt-[100px] md:pt-[120px] min-h-[400px] animate-pulse">
      {/* Poster Placeholder */}
      <div className="rounded-2xl bg-gray-700 w-[220px] md:w-[250px] h-[330px] shadow-lg"></div>

      {/* Info Placeholder */}
      <div className="flex-1 md:ml-9 space-y-4 w-full">
        {/* Title */}
        <div className="h-8 md:h-10 bg-gray-700 rounded w-3/4"></div>
        {/* Watch Trailer Button */}
        <div className="h-6 md:h-8 w-32 bg-gray-600 rounded"></div>
        {/* Overview */}
        <div className="space-y-2 mt-2 md:mt-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
        </div>
        {/* Rating / Release / Genre */}
        <div className="space-y-1 mt-2 md:mt-3">
          <div className="h-3 bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/3"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          <div className="h-3 bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
