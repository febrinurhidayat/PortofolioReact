import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <body className="container bg-black">
        <App />
      </body>
    </BrowserRouter>
  </StrictMode>
);
