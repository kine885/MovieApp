export default function DataTableLoading() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
        <p className="mt-3 text-gray-400 font-medium">Loading data...</p>
      </div>
    </div>
  );
}
