import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LayoutTop from './assets/LayoutTop'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<LayoutTop />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  )
}

export default App