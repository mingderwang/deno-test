import React from "https://esm.sh/react";
import ReactDOMServer from "https://esm.sh/react-dom/server";

function App() {
  return (
    <div>
      <h1>Hello, Deno!</h1>
      <p>This is a React app running on Deno.</p>
    </div>
  );
}

const html = ReactDOMServer.renderToString(<App />);
console.log(html);
