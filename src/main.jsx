import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";
import './styles/fonts.css';

import Header from "./components/HeaderZld/index";
import Footer from "./components/molecules/Footer/ZLD/index";
import { JotaiProvider } from './jotai-provider';
import { appController } from './store/appController';
import getLocations from "./functions/getLocations"
// Custom domain rewrite
const CUSTOM_DOMAIN = "https://zenleafdispensaries.com";

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

async function initializeAppAndRender() {
  try {
    await appController.initialize(); // ✅ Ensure shared state is set before rendering
    // appController.menuLocationRouter("state-specofic")
    const locationsData = await getLocations()
    let storeLocations = locationsData?.filter((hit) => hit._geoloc)
    appController.updateState({allStoreLocations: storeLocations})

  } catch (err) {
    console.error("App initialization failed:", err);
  }

  // Render Header
  const headerEl = document.getElementById("header");
  if (headerEl) {
    ReactDOM.createRoot(headerEl).render(
      <React.StrictMode>
        <BrowserRouter>
          <JotaiProvider>
            <Header />
          </JotaiProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  }

  // Render Footer
  const footerEl = document.getElementById("footer");
  if (footerEl) {
    ReactDOM.createRoot(footerEl).render(
      <React.StrictMode>
        <BrowserRouter>
          <JotaiProvider>
            <Footer />
          </JotaiProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  }

  // Rewrite links
  document.addEventListener("DOMContentLoaded", rewriteAllLinksToCustomDomain);
  const observer = new MutationObserver(rewriteAllLinksToCustomDomain);
  observer.observe(document.body, { childList: true, subtree: true });
}

// ✅ Start app
initializeAppAndRender();
