/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/styles.css";

function client() {
  createRoot(document.getElementById("root")).render(<App />);
}

if (typeof document !== "undefined") {
  client();
}

export default async function server(request) {
  return new Response(
    `
    <html>
      <head>
        <title>Resume Builder</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `,
    {
      headers: {
        "content-type": "text/html",
      },
    }
  );
}