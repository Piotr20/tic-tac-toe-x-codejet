"use client";
import { MarkerCircle, MarkerCross } from "@/components/shared";
import { checkWinner } from "@/lib/actions";
import { checkWinnerHelper } from "@/lib/helpers";
import { gameStateStore } from "@/store/store";
import { colors, flexCenter, transformCenter } from "@/util";
import { mq } from "@/util/media-queries";
import { useMachine } from "@xstate/react";
import { useEffect, useState } from "react";
import styled, { CSSObject } from "styled-components";
import { Button, Text } from "../../shared";

type Props = {
  player1: string;
  player2: string;
  boardSize: number;
};

export function Board({ boardSize, player1, player2 }: Props) {
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
  const [winner, setWinner] = useState<"X" | "O">();

  useEffect(() => {
    const winner = checkWinnerHelper(cells);
    if (winner) setWinner(winner);
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
                opacity: 1,
              },
            }}
            key={index}
            onClick={() => {
              if (!winner) {
                setCells((prevCells) => {
                  let newCells: string[][] = [...prevCells];

                  newCells = newCells.map((row, rowIndex) => {
                    if (rowIndex === Math.floor(index / boardSize)) {
                      return row.map((cell, columnIndex) => {
                        if (columnIndex === Math.floor(index % boardSize)) {
                          return turn.marker;
                        }
                        return cell;
                      });
                    }
                    return row;
                  });

                  return newCells;
                });
                setTurn((prevTurn) => {
                  return prevTurn.name === player1
                    ? { name: player2, marker: "O" }
                    : { name: player1, marker: "X" };
                });
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
          <StyledResetButton
            additionalStyles={{
              marginTop: "16px",
            }}
            onClick={() => {
              setCells(new Array(boardSize).fill(new Array(boardSize).fill(null)));
              setWinner(undefined);
              setTurn({ name: player1, marker: "X" });
            }}
          >
            Reset
          </StyledResetButton>
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

const StyledResetButton = styled.button<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  backgroundColor: "#ff4757", // Modern red color
  color: "#fff", // Text color
  border: "none",
  borderRadius: "5px", // Rounded corners
  padding: "12px 24px", // Increased padding for better touch targets
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.2s", // Added transform transition
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  "&:hover": {
    backgroundColor: "#e84118", // Slightly darker red on hover
    transform: "translateY(-2px)", // Lift effect on hover
  },
  "&:active": {
    transform: "translateY(0)", // Reset lift effect on click
  },
  [mq("lg")]: {
    padding: "14px 28px", // Larger padding on larger screens
  },
  ...additionalStyles,
}));
