import React from "react";
import ReactDOM from "react-dom/client";
import RootPage from "../app/page";
import "../app/globals.css";

// import Header from "@/components/HeaderZld"
import Footer from "../components/molecules/Footer/ZLD/index"
// import { MainApp } from "@/components/main-app"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <div className="min-h-screen flex flex-col">
      {/* <header id="header-vite" className="bg-white shadow-sm"></header> */}
      {/* <Header />
      <main id="app" className="flex-1">
        <MainApp />
      </main> */}
      {/* <footer id="footer-vite" className="bg-gray-50"></footer> */}
      <Footer />
      <noscript>
        <p className="p-4 text-center text-red-600">This app needs JavaScript. Please enable it.</p>
      </noscript>
    </div>
  </React.StrictMode>
);
