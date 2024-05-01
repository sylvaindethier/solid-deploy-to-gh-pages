import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import "./Counter.css";

const decrement = (value: number) => value - 1;
const increment = (value: number) => value + 1;

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  const setDecrement = () => setCount(decrement);
  const setIncrement = () => setCount(increment);

  return (
    <>
      <button class="decrement" onClick={setDecrement}>
        -
      </button>
      <span>
        Count is <code>{count()}</code>
      </span>
      <button class="increment" onClick={setIncrement}>
        +
      </button>
    </>
  );
};
