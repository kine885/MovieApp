import { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import DataTableLoading from "./Loading/DataTableLoading";

export default function MovieDataTable({ data = [], loading = false, error = null, title = "Items" }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Filter for movie titles or TV names
  const filteredData = data?.filter((item) =>
    (item.title || item.name)?.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Title",
      selector: (row) => row.title || row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Release Date",
      selector: (row) => row.release_date || row.first_air_date || "-",
      sortable: true,
      width: "130px",
    },
    {
      name: "Rating",
      selector: (row) => row.vote_average?.toFixed(1) || "-",
      sortable: true,
      width: "100px",
    },
    {
      name: "Poster",
      selector: (row) => (
        <img
          width={80}
          className="rounded-lg p-1"
          src={row.poster_path ? `https://image.tmdb.org/t/p/w200${row.poster_path}` : "https://via.placeholder.com/80x120?text=No+Image"}
          alt={row.title || row.name}
        />
      ),
      width: "120px",
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => navigate(`/details/${row.id}`)}
          className="text-white bg-gradient-to-br from-blue-600 to-purple-500 hover:opacity-90 px-3 py-1.5 rounded-lg text-sm"
        >
          👁️ View
        </button>
      ),
      width: "120px",
    },
  ];

  if (loading) return <DataTableLoading />;
  if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredData || []}
        pagination
        paginationPerPage={10}
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
}
