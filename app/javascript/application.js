// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <>
      <html lang="pt-BR">
        <body>
          <Header />
        </body>
      </html>
    </>
  );
}

root.render(<App />);
