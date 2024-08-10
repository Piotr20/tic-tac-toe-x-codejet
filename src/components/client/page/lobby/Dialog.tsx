import { transformCenter } from "@/util";
import { mq } from "@/util/media-queries";
import styled, { CSSObject } from "styled-components";
import { Text } from "../../shared";

export function LobbyDialog() {
  return (
    <StyledLobbyDialogContainer>
      <Text tag="h1">Welcome to Tic Tac Toe</Text>
      <Text tag="p">Welcome to Tic Tac Toe</Text>
    </StyledLobbyDialogContainer>
  );
}

export const StyledLobbyDialogContainer = styled.button<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  padding: "16px",
  borderRadius: "8px",
  position: "fixed",
  [mq("lg")]: {
    padding: "24px",
  },
  ...transformCenter,
  ...additionalStyles,
}));
