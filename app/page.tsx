"use client"

import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import Header from "@/components/HeaderZld"
import Footer from "@/components/molecules/Footer/ZLD/index.js"
import { MainApp } from "@/components/main-app"

export default function Page() {
  // useEffect(() => {
  //   // Create root for header
  //   const headerElement = document.getElementById("header-vite")
  //   if (headerElement) {
  //     const headerRoot = createRoot(headerElement)
  //     headerRoot.render(<Header />)
  //   }

  //   // Create root for footer
  //   const footerElement = document.getElementById("footer-vite")
  //   if (footerElement) {
  //     const footerRoot = createRoot(footerElement)
  //     footerRoot.render(<Footer />)
  //   }

  //   // Cleanup function
  //   return () => {
  //     // Note: In a real Vite app, you'd unmount these roots on cleanup
  //   }
  // }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* <header id="header-vite" className="bg-white shadow-sm"></header> */}
      <Header />
      <main id="app" className="flex-1">
        <MainApp />
      </main>
      {/* <footer id="footer-vite" className="bg-gray-50"></footer> */}
      <Footer />
      <noscript>
        <p className="p-4 text-center text-red-600">This app needs JavaScript. Please enable it.</p>
      </noscript>
    </div>
  )
}
