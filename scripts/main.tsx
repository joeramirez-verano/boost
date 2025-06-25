// This represents the main.tsx file that would be used in a real Vite app
import { createRoot } from "react-dom/client"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

// Create root for header
const headerElement = document.getElementById("header-vite")
if (headerElement) {
  createRoot(headerElement).render(<Header />)
}

// Create root for footer
const footerElement = document.getElementById("footer-vite")
if (footerElement) {
  createRoot(footerElement).render(<Footer />)
}

console.log("Header and Footer components rendered via separate React roots!")
