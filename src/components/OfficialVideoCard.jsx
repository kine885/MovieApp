export default function OfficialVideoCard({ video }) {
  // video.site can be "YouTube", "Vimeo", etc.
  const videoUrl = video.site === "YouTube"
    ? `https://www.youtube.com/watch?v=${video.key}`
    : "#";

  // You can use YouTube thumbnails
  const thumbnailUrl = video.site === "YouTube"
    ? `https://img.youtube.com/vi/${video.key}/hqdefault.jpg`
    : "";

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-gray-800 overflow-hidden">
      {/* Thumbnail */}
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.name}
            className="w-full h-56 object-cover md:h-64"
          />
        ) : (
          <div className="w-full h-56 flex items-center justify-center bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            No Thumbnail
          </div>
        )}
      </a>

      {/* Text Section */}
      <div className="p-4">
        <h5 className="font-inter font-bold text-gray-900 dark:text-white text-sm truncate">
          {video.name}
        </h5>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {video.type} • {video.site}
        </p>
      </div>
    </div>
  );
}
