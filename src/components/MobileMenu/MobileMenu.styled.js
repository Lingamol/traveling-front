import styled from "@emotion/styled";
import { colors, media } from "styles/stylesLayout";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 2px solid red;
  max-width: 1280px;
  padding: 0 16px;

  ${media.tablet} {
    padding: 0 32px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }
`;

export const MenuContainer = styled.div`
  list-style: flex;
  justify-content: center;
  position: absolute;
  /* align-items: center; */
  top: 0;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;

  background: ${colors.accentButton};

  transition: 250ms;
  transition-property: transform;
  transition-timing-function: ease;
  background-color: #fdf7f2;
  overflow: auto;
  transform: ${(props) => {
    let translateY = "translateY(-100%);";

    if (Boolean(props.isOpen)) {
      translateY = "translateY(0);";
    }

    if (!Boolean(props.isOpen)) {
      translateY = "translateY(-100%);";
    }

    return translateY;
  }};
`;

export const MenuHeader = styled.div`
  /* outline: 2px solid black;
  padding: 0 16px;

  ${media.tablet} {
    padding: 0 32px;
  }

  ${media.mobile} {
    padding: 0 20px;
  } */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile} {
    margin-top: 15px;
  }
  ${media.tablet} {
    margin-top: 24px;
  }
`;
