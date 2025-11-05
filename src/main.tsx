import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RecycleTech from "./App.tsx";
import "./styles/styles.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecycleTech />
  </StrictMode>
);
