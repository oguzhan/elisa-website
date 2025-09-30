"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="Go to homepage">
            <span className="text-3xl md:text-4xl font-bold text-black leading-none tracking-tight" style={{ fontFamily: 'var(--font-hand)' }}>
              Elisa Hertzler
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-200">
              HOME
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors duration-200">
              PORTFOLIO
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors duration-200">
              CASE STUDIES
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors duration-200">
              CONTACT
            </a>
          </nav>

          {/* Work with me button */}
          <Button
            variant="outline"
            className="hidden md:inline-flex transition-all duration-200 bg-transparent gradient-outline"
          >
            <a href="#contact">WORK WITH ME</a>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-black transition-colors duration-200">
                HOME
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors duration-200">
                PORTFOLIO
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-black transition-colors duration-200">
                CASE STUDIES
              </a>
              <a href="#blog" className="text-gray-700 hover:text-black transition-colors duration-200">
                BLOG PAGE
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors duration-200">
                CONTACT
              </a>
              <Button variant="outline" className="w-fit bg-transparent gradient-outline">
                WORK WITH ME
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
