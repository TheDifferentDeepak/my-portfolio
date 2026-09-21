import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">The Different Deepak</h1>

        {/* Desktop Links (chhupe rahenge mobile pe) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </div>

        {/* Hamburger Icon (sirf mobile pe dikhega) */}
        <button 
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (jab isOpen true ho tabhi dikhega) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-sm font-medium">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600 transition">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar