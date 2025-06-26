"use client"

import { useState } from "react"
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const [message, setMessage] = useState("")
  const [set, setSet] = useState(false)

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Vite App
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Built with Vite for lightning-fast development and optimized production builds. Experience the future of
              frontend tooling.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Button to show message */}
            <button
              onClick={() => setMessage("Hi there world")}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Show Message
            </button>
            <button
              onClick={() => setSet(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Show Ali
            </button>

            {/* Conditionally render message */}
            {set && <p className="mt-4 text-purple-700 font-semibold">{"Ali Ali"}</p>}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://vitejs.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Vite Docs
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  React Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Vite App. Built with ⚡ Vite + React. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
