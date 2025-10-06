export default function CardLoading({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-700 rounded-lg animate-pulse"
        >
          {/* Image placeholder */}
          <div className="h-72 bg-gray-500 rounded-t-lg flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            </svg>
          </div>
          {/* Title placeholder */}
          <div className="h-4 bg-gray-600 rounded mt-2 mx-2 w-3/4"></div>
          <div className="h-3 bg-gray-600 rounded mt-1 mx-2 w-1/2"></div>
          {/* Optional rating placeholder */}
          <div className="flex items-center mt-2 mx-2 gap-2">
            <div className="h-3 w-6 bg-gray-600 rounded"></div>
            <div className="h-3 w-12 bg-gray-600 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
}
