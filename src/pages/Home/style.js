import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: relative;
`;

export const Content = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: blue;
  position: absolute;
  left: ${(props) => `${props.$coords.x - 25}px`};
  top: ${(props) => `${props.$coords.y - 25}px`};
`;
