import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../app/globals.css";
import './styles/fonts.css'

import Header from "@/components/HeaderZld/index";
import Footer from "../components/molecules/Footer/ZLD/index";

// Your custom domain
const CUSTOM_DOMAIN = "https://zenleafdispensaries.com";

// Function to rewrite all anchor tags
function rewriteAllLinksToCustomDomain() {
  const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
  links.forEach((link) => {
    const originalHref = link.getAttribute("href");
    if (originalHref) {
      const fullUrl = new URL(originalHref, CUSTOM_DOMAIN);
      link.setAttribute("href", fullUrl.href);
    }
  });
}

ReactDOM.createRoot(document.getElementById("header")!).render(
  <React.StrictMode>
    <BrowserRouter>
       <Header />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("footer")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// Rewrite all links after DOM is loaded
document.addEventListener("DOMContentLoaded", rewriteAllLinksToCustomDomain);

// Optional: for dynamic links added after initial load
const observer = new MutationObserver(rewriteAllLinksToCustomDomain);
observer.observe(document.body, { childList: true, subtree: true });