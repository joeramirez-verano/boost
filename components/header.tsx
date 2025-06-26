"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vite App
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
