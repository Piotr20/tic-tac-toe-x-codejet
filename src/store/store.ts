import { createMachine } from "xstate";

export const gameStateStore = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswGUAuLtgDpUNMxtsBLAOylgGIBJAOQYBUB9AcQEEBZAUQDaABgC6iUAAcA9rAqVpVCSAAeiALQBmAIwEAbMIAsAJgDsmgBza9ezXtPGANCACeibYYCcBQxc0BWPWt-TR1jYwBfCOdiLFx8AgoIABswOkxWbgAlVhFxJBAZOQUlArUEQwcCYU9NUxDNYX9tUxrDZzcEKwJ-YT6jcICazUjokFicPEJJZJQXaig6AHVmPOUi+QpFZXLw42q9Yy962pbQjsQRzWr+7WNNT1NPQ2ELKJj0OKmCGbmFugAIlluEs1gUNiUdog9gcjo9-KdzJoLghLLpen06p4+pVQpp3uNPpMEr95jQ6AAFbgAVUwQjE61km22ZWh4VhxwROiRKOMwn2xgxrx0wgcvT0BIm8UIAHdFHQsvwMtlcgzwUzIayKiECMZtBZzE8LLV+f5-Cirjc+ncHk8Xm8xlLvhAAE4oGUKpWZHJgqQaralUDlQw6vUGrHGxqC82uS7dIVYnFI-EEqjSCBwZRO-CM4oBqEIdT3CzVI78nShMxeFHqPRW-pHQwvVp3SVE6VEIlkSg0eDqvMsoMabTY0sve7aSumauxiqigh3fX+J6eEchB0fEgdibdhawH6zFxgF3aXPMwOqYcmMflycjaeeFFeQz6MMWYSNfwmBxtrffHfkHuB5zMexhnpqQ6Fh4+z8uOFb3jOnSHN4i4WO+n7ftov5fAkAE9rQBAAEbSCgLoQJgFAAF5gOB+Zauo0E3hOU6IYgpi2K++roU0mHYcShBJKktGDpeCBcgQnhhq0H5+JorEIHqwgLrcBgIvath8R2pILMJF7lKYJbCIcXhof4eq1OYKKSdUGLaMIHgeP4xoboSf4JHKF4QnRkGhC+UkPEcfj3Ba9w+J44UWHoLzLsa9yac6boyrpBa+bq+rmJJvhXBaFgwf0hh6IEIbFqYURREAA */
  id: "gameState",
  initial: "idle",
  schemas: {
    events: {} as { type: "INIT_GAME"; player1: string; player2: string; boardSize: number },
  },
  states: {
    idle: {
      on: {
        START: "playing",
      },
    },
    playing: {
      on: {
        WIN: "won",
        DRAW: "draw",
        PAUSE: "idle",
      },
    },
    won: {
      on: {
        RESTART: "idle",
      },
    },
    draw: {
      on: {
        RESTART: "idle",
      },
    },
  },
});
