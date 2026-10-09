import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center h-16">
  <div className="shrink-0">
    <Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-300">
      🎓 StudentMS
    </Link>
  </div>
 
</div>
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-400 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-400 transition duration-200">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav