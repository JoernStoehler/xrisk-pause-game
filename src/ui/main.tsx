import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./style.css";

const app = document.querySelector<HTMLElement>("#app");
if (!app) throw new Error("Missing #app");

createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
