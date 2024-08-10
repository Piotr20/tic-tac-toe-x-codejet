import { BoardSizes, colors, transformCenter } from "@/util";
import { mq } from "@/util/media-queries";
import styled, { CSSObject } from "styled-components";
import { Button, Input, Text } from "../../shared";
import { MarkerCircle, MarkerCross } from "@/components/shared";

export function LobbyDialog() {
  return (
    <StyledLobbyDialogContainer>
      <Text
        tag="h1"
        additionalStyles={{
          textAlign: "center",
        }}
      >
        Tic Tac Toe
      </Text>
      <Text tag="p">It's a short game showing a sample of my frontend coding skills</Text>
      <StyledLobbyDialogBody>
        <StyledPlayerInputList>
          <StyledPlayerInputListItem>
            <Text
              tag="h6"
              additionalStyles={{
                textAlign: "center",
                paddingBottom: "6px",
              }}
            >
              Player 1
            </Text>
            <Input
              type="text"
              additionalStyles={{
                marginBottom: "8px",
              }}
            />
            <MarkerCross />
          </StyledPlayerInputListItem>
          <StyledPlayerInputListItem>
            <Text
              tag="h6"
              additionalStyles={{
                textAlign: "center",
                paddingBottom: "6px",
              }}
            >
              Player 2
            </Text>
            <Input
              type="text"
              additionalStyles={{
                marginBottom: "8px",
              }}
            />
            <MarkerCircle />
          </StyledPlayerInputListItem>
        </StyledPlayerInputList>
        <StyledBoardSizePickerContainer>
          {BoardSizes.map((board) =>
            board.size ? (
              <StyledBoardSizePickerCell key={board.label}>
                <Text
                  tag="h5"
                  additionalStyles={{
                    textAlign: "center",
                    paddingBottom: "6px",
                  }}
                >
                  {board.label}
                </Text>
                <StyledBoard size={board.size}>
                  {new Array(Math.pow(board.size, 2)).fill("").map((_, index) => (
                    <StyledBoardCell key={index} />
                  ))}
                </StyledBoard>
              </StyledBoardSizePickerCell>
            ) : (
              <StyledBoardSizePickerCell key={board.label}>
                <Text
                  tag="h5"
                  additionalStyles={{
                    textAlign: "center",
                    paddingBottom: "6px",
                  }}
                >
                  {board.label}
                </Text>
                <Text tag="p">Chose how big the board should be</Text>
                <Input min={3} type="number" />
              </StyledBoardSizePickerCell>
            )
          )}
        </StyledBoardSizePickerContainer>
        <Button
          kind="primary"
          additionalStyles={{
            margin: "0 auto",
            marginTop: "24px",
          }}
        >
          Start
        </Button>
      </StyledLobbyDialogBody>
    </StyledLobbyDialogContainer>
  );
}

export const StyledLobbyDialogContainer = styled.div<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  backgroundColor: colors.primary.white,
  padding: "24px",
  borderRadius: "8px",
  position: "fixed",
  ...transformCenter,
  [mq("lg")]: {
    padding: "32px",
  },
  ...additionalStyles,
}));

export const StyledLobbyDialogBody = styled.div<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  paddingTop: "16px",
  [mq("lg")]: {
    paddingTop: "24px",
  },
  ...additionalStyles,
}));

export const StyledPlayerInputList = styled.ul<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "16px",
  listStyle: "none",
  [mq("lg")]: {
    flexDirection: "row",
    columnGap: "16px",
  },
  ...additionalStyles,
}));

export const StyledPlayerInputListItem = styled.li<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ["&>svg>circle, &>svg>line"]: {
    stroke: colors.primary.black,
  },
  [mq("lg")]: {},
  ...additionalStyles,
}));

export const StyledBoardSizePickerContainer = styled.div<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "36px",
  listStyle: "none",
  border: `1px solid ${colors.primary.black}`,
  borderRadius: "8px",
  [mq("lg")]: {},
  ...additionalStyles,
}));

export const StyledBoardSizePickerCell = styled.button<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  padding: "16px",
  cursor: "pointer",
  transition: "all 0.3s",
  ["&:hover, &:focus"]: {
    backgroundColor: colors.primary.blue,
    ["&>h5, &>p"]: {
      color: colors.primary.white,
    },
  },
  [mq("lg")]: {
    padding: "24px",
  },
  ...additionalStyles,
}));

export const StyledBoard = styled.ul<{
  size: number;
  additionalStyles?: CSSObject;
}>(({ additionalStyles, size }) => ({
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: `repeat(${size}, 1fr)`,
  padding: "16px",
  minWidth: "120px",
  maxWidth: "200px",
  margin: "0 auto",
  [mq("lg")]: {
    padding: "24px",
  },
  ...additionalStyles,
}));

export const StyledBoardCell = styled.li<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  backgroundColor: colors.base.grey700,
  border: `1px solid ${colors.primary.gray}`,

  aspectRatio: "1/1",
  [mq("lg")]: {},
  ...additionalStyles,
}));
