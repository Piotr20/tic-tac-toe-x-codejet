"use client";
import { MarkerCircle, MarkerCross } from "@/components/shared";
import { checkWinner } from "@/lib/actions";
import { checkWinnerHelper, handleMoveHelper } from "@/lib/helpers";
import { gameStateStore } from "@/store/store";
import { colors, flexCenter, transformCenter } from "@/util";
import { mq } from "@/util/media-queries";
import { useMachine } from "@xstate/react";
import { useEffect, useState } from "react";
import styled, { CSSObject } from "styled-components";
import { Button, Text } from "../../shared";

type Props = {
  setStartGame: (startGame: boolean) => void;
  player1: string;
  player2: string;
  boardSize: number;
};

export function Board({ boardSize, player1, player2, setStartGame }: Props) {
  const [turn, setTurn] = useState<
    | {
        name: typeof player1;
        marker: "X";
      }
    | {
        name: typeof player2;
        marker: "O";
      }
  >({
    name: player1,
    marker: "X",
  });
  const [cells, setCells] = useState(new Array(boardSize).fill(new Array(boardSize).fill(null)));
  const [winner, setWinner] = useState<"X" | "O" | "draw">();
  const [state, send] = useMachine(gameStateStore);

  useEffect(() => {
    setTurn((prevTurn) => {
      return prevTurn.name === player1 ? { name: player2, marker: "O" } : { name: player1, marker: "X" };
    });
    const winner = checkWinnerHelper(cells);
    if (winner) {
      setWinner(winner);
      winner === "draw" ? send({ type: "DRAW" }) : send({ type: "WIN" });
    }
  }, [cells]);

  return (
    <StyledContainer>
      <StyledBoard size={boardSize}>
        {new Array(Math.pow(boardSize, 2)).fill("").map((_, index) => (
          <StyledBoardCell
            additionalStyles={{
              cursor: "pointer",
              position: "relative",
              ["&:hover>span"]: {
                opacity: 0.5,
              },
            }}
            key={index}
            onClick={() => {
              if (!winner) {
                const newBoard = handleMoveHelper({ cells, index, turn, boardSize });
                cells.flat()[index] === null && setCells(newBoard);
              }
            }}
          >
            {cells[Math.floor(index / boardSize)][Math.floor(index % boardSize)] === "X" ? (
              <MarkerCross animated />
            ) : cells[Math.floor(index / boardSize)][Math.floor(index % boardSize)] === "O" ? (
              <MarkerCircle animated />
            ) : (
              <StyledMarkerContainer>
                {!winner && turn.marker === "X" ? (
                  <MarkerCross />
                ) : turn.marker === "O" ? (
                  <MarkerCircle />
                ) : null}
              </StyledMarkerContainer>
            )}
          </StyledBoardCell>
        ))}
      </StyledBoard>
      <StyledUIContainer>
        <Text tag="h4" dark>
          {winner
            ? winner === "X"
              ? `${player1} wins!`
              : winner === "O"
              ? `${player2} wins!`
              : "It's a draw!"
            : turn.name === player1
            ? `${player1}'s turn`
            : `${player2}'s turn`}
        </Text>
        {winner && (
          <>
            <Button
              kind="primary"
              additionalStyles={{
                marginTop: "16px",
                border: `1px solid ${colors.secondary.lightYellow}`,
              }}
              onClick={() => {
                setCells(new Array(boardSize).fill(new Array(boardSize).fill(null)));
                setWinner(undefined);
                setTurn({ name: player1, marker: "X" });
                send({ type: "RESTART" });
              }}
            >
              Reset
            </Button>
            <Button
              kind="secondary"
              additionalStyles={{
                marginTop: "16px",
                border: `1px solid ${colors.primary.white}`,
              }}
              onClick={() => {
                setCells(new Array(boardSize).fill(new Array(boardSize).fill(null)));
                setWinner(undefined);
                setTurn({ name: player1, marker: "X" });
                setStartGame(false);
                send({ type: "RESTART" });
              }}
            >
              New game
            </Button>
          </>
        )}
      </StyledUIContainer>
    </StyledContainer>
  );
}

export const StyledContainer = styled.div<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  backgroundColor: colors.primary.black,
  padding: "24px",
  flexDirection: "column",
  alignItems: "center",
  display: "flex",
  [mq("lg")]: {
    padding: "32px",
  },
  ...additionalStyles,
}));

const StyledBoard = styled.ul<{
  size: number;
  additionalStyles?: CSSObject;
}>(({ additionalStyles, size }) => ({
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: `repeat(${size}, 1fr)`,
  padding: "24px",
  minWidth: "300px",

  margin: "0 auto",
  [mq("lg")]: {
    minWidth: "480px",
    maxWidth: "1000px",
    padding: "32px",
  },
  ...additionalStyles,
}));

const StyledBoardCell = styled.li<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  backgroundColor: colors.base.grey700,

  border: `1px solid ${colors.primary.gray}`,
  aspectRatio: "1/1",
  display: "flex",
  ...flexCenter,
  [mq("lg")]: {},
  ...additionalStyles,
}));

const StyledMarkerContainer = styled.span<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  pointerEvents: "none",
  opacity: 0,
  transition: "all 0.3s",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  [mq("lg")]: {},
  ...additionalStyles,
}));

const StyledUIContainer = styled.div<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [mq("lg")]: {},
  ...additionalStyles,
}));
