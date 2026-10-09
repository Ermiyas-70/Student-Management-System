import { Outlet } from "react-router-dom"
import Nav from "../component/Nav"
import Footer from "../component/Footer"

const LayoutTop = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800">
      <Nav />
      
      <main className="grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutTop