import React from "react";
import { createRoot } from "react-dom/client";
import { KarCastLanding } from "./lib/karcast/landing";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KarCastLanding />
  </React.StrictMode>,
);