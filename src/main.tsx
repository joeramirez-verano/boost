import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../app/globals.css";

import Header from "@/components/HeaderZld/index";
import Footer from "../components/molecules/Footer/ZLD/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div id="app" className="flex-1">
        </div>
        <Footer />
        <noscript>
          <p className="p-4 text-center text-red-600">
            This app needs JavaScript. Please enable it.
          </p>
        </noscript>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
