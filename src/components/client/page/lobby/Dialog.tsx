import { transformCenter } from "@/util";
import { mq } from "@/util/media-queries";
import styled, { CSSObject } from "styled-components";

export function LobbyDialog() {
  return <StyledLobbyDialogContainer></StyledLobbyDialogContainer>;
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
