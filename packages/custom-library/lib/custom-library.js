// custom-library/index.js
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

let mountHook = null;
let oldVNode = null;

// export function useState(initialState) {
//   let state = initialState;

//   function setState(newState) {
//     state = newState;
//     console.log(state);
//     render(oldVNode, state);
//   }

//   return [state, setState];
// }

export function setState(handler) {
  handler();
}

export function render(templateFunction, containerId) {
  const newVNode = templateFunction();
  if (oldVNode != null) {
    patch(oldVNode, newVNode);
    oldVNode = newVNode;
  } else {
    // Handle the case when oldVNode is null, e.g., during the initial rendering
    patch(containerId, newVNode);
  }

  if (mountHook) {
    mountHook();
    mountHook = null;
  }

  oldVNode = newVNode;
}

export function useEffect(callback) {
  mountHook = callback;
}

// Additional features can be added here
