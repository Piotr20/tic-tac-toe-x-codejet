import { createMachine } from "xstate";

const gameStateStore = createMachine({
  id: "gameState",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});
