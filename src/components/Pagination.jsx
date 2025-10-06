import { useState, useEffect } from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageWindow = 5 // number of pages to show at a time
  const [startPage, setStartPage] = useState(1)

  // Adjust the startPage whenever currentPage moves outside the window
  useEffect(() => {
    if (currentPage < startPage) {
      setStartPage(currentPage);
    } else if (currentPage >= startPage + pageWindow) {
      setStartPage(currentPage - pageWindow + 1)
    }
  }, [currentPage])

  const pages = []
  for (let i = startPage; i <= Math.min(startPage + pageWindow - 1, totalPages); i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Page navigation example" className="flex justify-center mt-6 ">
      <ul className="flex items-center -space-x-px h-8 text-sm ">
        {/* Prev Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-[#1F2A37] border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border  ${
                page === currentPage
                  ? "text-white border-blue-300 bg-blue-500 hover:bg-blue-300 hover:text-blue-700"
                  : "text-white bg-[#1F2A37] border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#1F2A37] border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
