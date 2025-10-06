import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import ScrollToTop from "./ScrollToTop"
import LeftSidebar from "./LeftSidebar"
import AdminNavbar from "./AdminNavbar"

export default function MainLayout(){
    return(
         <>
            <Navbar/>
            <ScrollToTop />
            <Outlet/>
            <Footer/>
        </>
    )
}
export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar />

        {/* Page content */}
        <div className="p-6 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}