import { render, setState, useEffect } from "custom-library";
import { h } from "snabbdom";
// Initial state
let state = {
  count: 0,
};

// Templating function
function Counter() {
  return h("div", [
    h("h1", `Count: ${state.count}`),
    h("button", { on: { click: () => setState(increment) } }, "Add"),
    h("button", { on: { click: () => setState(decrement) } }, "Subtract"),
    // Additional elements based on props or state
  ]);
}

// Function to update the state and re-render
function increment() {
  state.count++;
  render(Counter);
}
function decrement() {
  state.count--;
  render(Counter);
}

// Mount hook example
useEffect(() => {
  console.log("Component mounted!");
});

// Initial rendering
const root = document.getElementById("app");
render(Counter, root);
