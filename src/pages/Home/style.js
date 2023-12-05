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

export const ButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 80px;
  left: 0;
`;

export const Button = styled.button`
  width: 125px;
  height: 80px;
  font-size: 22px;
  color: #FFF;
  border: none;
  background-color: blue;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
