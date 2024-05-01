import type { Component } from "solid-js";

import viteLogo from "/vite.svg";
import solidLogo from "/solid.svg";
import tsLogo from "/ts.svg";
import "./App.css";
import { Counter } from "#components/Counter";

const App: Component = () => {
  return (
    <div class="App">
      <main>
        <header>
          <img src={viteLogo} class="logo vite" alt="Vite logo" />
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
          <img src={tsLogo} class="logo typescript" alt="TypeScript logo" />
        </header>
        <h1>Vite + Solid + TS</h1>
        <div class="card">
          <Counter />
        </div>
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
      </main>
    </div>
  );
};

export default App;
