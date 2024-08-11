"use client";

import { Board, LobbyDialog } from "@/components/client";
import { gameStateStore } from "@/store/store";
import { useMachine } from "@xstate/react";
import { useState } from "react";

export default function Home() {
  const [player1, setPlayer1] = useState<string>("Player 1");
  const [player2, setPlayer2] = useState<string>("Player 2");
  const [boardSize, setBoardSize] = useState<number>(3);
  const [startGame, setStartGame] = useState<boolean>(false);

  const [state, send] = useMachine(gameStateStore);

  return (
    <main className="">
      {startGame ? (
        <Board boardSize={boardSize} player1={player1} player2={player2} setStartGame={setStartGame} />
      ) : (
        <LobbyDialog
          setStartGame={setStartGame}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setBoardSize={setBoardSize}
        />
      )}
    </main>
  );
}
