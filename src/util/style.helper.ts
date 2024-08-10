import { CSSObject } from "styled-components";

export const flexCenter: CSSObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const transformCenter: CSSObject = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
