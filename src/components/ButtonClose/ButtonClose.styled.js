import styled from "@emotion/styled";
import { colors, media, transFunc } from "styles/stylesLayout";
import { GrFormClose } from "react-icons/gr";

export const Button = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;
export const CloseIcon = styled(GrFormClose)`
  width: 40px;
  height: 40px;
  ${media.mobileAndTablet} {
    width: 30px;
    height: 30px;
  }
  /* fill: ${colors.accent};
  color: ${colors.accent};
  stroke: ${colors.accent}; */
  transition: background-color ${transFunc.td250CB};
  border-radius: 50%;
  .closeButton:hover &,
  .closeButton:focus & {
    background: ${colors.accent};
    /* color: ${colors.accentButton}; */
  }
`;
