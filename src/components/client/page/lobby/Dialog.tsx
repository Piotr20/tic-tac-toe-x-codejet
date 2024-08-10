import styled, { CSSObject } from "styled-components";

export function LobbyDialog() {
  return <></>;
}

export const StyledLobbyDialogContainer = styled.button<{
  additionalStyles?: CSSObject;
}>(({ additionalStyles }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));
