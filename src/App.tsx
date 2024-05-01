import type { Component } from "solid-js";

import viteLogo from "/vite.svg";
import solidLogo from "/solid.svg";
import "./App.css";

const App: Component = () => {
  return (
    <div class="App">
      <header class="header">
        <img src={viteLogo} class="logo" alt="Vite logo" />
        <img src={solidLogo} class="logo" alt="Solid logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="link"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
